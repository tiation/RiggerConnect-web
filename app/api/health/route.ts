/**
 * Health Check API Endpoint
 * RiggerConnect Web Application
 * ChaseWhiteRabbit NGO
 * 
 * Provides application health status for monitoring and deployment verification
 */

import { NextRequest, NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

interface HealthCheckResponse {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  version: string;
  uptime: number;
  services: {
    database: 'connected' | 'disconnected' | 'error';
    api: 'operational' | 'degraded' | 'down';
  };
  metrics: {
    memory: {
      used: number;
      total: number;
    };
    response_time: number;
  };
}

const startTime = Date.now();

export async function GET(request: NextRequest): Promise<NextResponse<HealthCheckResponse>> {
  const checkStart = Date.now();
  
  try {
    // Initialize health check response
    const health: HealthCheckResponse = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: process.env.APP_VERSION || '1.0.0',
      uptime: Math.floor((Date.now() - startTime) / 1000),
      services: {
        database: 'disconnected',
        api: 'operational'
      },
      metrics: {
        memory: {
          used: 0,
          total: 0
        },
        response_time: 0
      }
    };

    // Check database connectivity
    try {
      const supabase = createServerComponentClient({ cookies });
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .limit(1);
      
      health.services.database = error ? 'error' : 'connected';
    } catch (error) {
      console.error('Database health check failed:', error);
      health.services.database = 'error';
      health.status = 'unhealthy';
    }

    // Collect memory metrics (if available)
    if (typeof process !== 'undefined' && process.memoryUsage) {
      const memUsage = process.memoryUsage();
      health.metrics.memory = {
        used: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
        total: Math.round(memUsage.heapTotal / 1024 / 1024) // MB
      };
    }

    // Calculate response time
    health.metrics.response_time = Date.now() - checkStart;

    // Determine overall health status
    if (health.services.database === 'error') {
      health.status = 'unhealthy';
    }

    // Return appropriate HTTP status
    const httpStatus = health.status === 'healthy' ? 200 : 503;
    
    return NextResponse.json(health, { 
      status: httpStatus,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Health-Check': 'true'
      }
    });

  } catch (error) {
    console.error('Health check error:', error);
    
    return NextResponse.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      version: process.env.APP_VERSION || '1.0.0',
      uptime: Math.floor((Date.now() - startTime) / 1000),
      services: {
        database: 'error',
        api: 'down'
      },
      metrics: {
        memory: { used: 0, total: 0 },
        response_time: Date.now() - checkStart
      },
      error: 'Internal health check failure'
    } as HealthCheckResponse & { error: string }, { 
      status: 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'X-Health-Check': 'true'
      }
    });
  }
}

// Support for HEAD requests (used by some monitoring tools)
export async function HEAD(request: NextRequest): Promise<NextResponse> {
  try {
    const response = await GET(request);
    return new NextResponse(null, {
      status: response.status,
      headers: response.headers
    });
  } catch (error) {
    return new NextResponse(null, { status: 503 });
  }
}
