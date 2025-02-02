'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Bot, Building2, LineChart } from 'lucide-react';

const metrics = [
  {
    title: "Total Gen AI Usage",
    value: "2,847",
    description: "Requests today",
    icon: Bot,
    trend: "+12.5%"
  },
  {
    title: "Blocked Data Leaks",
    value: "24",
    description: "Last 24 hours",
    icon: AlertTriangle,
    trend: "-4.5%"
  },
  {
    title: "Most Used Tool",
    value: "ChatGPT",
    description: "45% of total usage",
    icon: LineChart,
    trend: "+5.2%"
  },
  {
    title: "High Risk Department",
    value: "Engineering",
    description: "38% of blocks",
    icon: Building2,
    trend: "+2.1%"
  }
];

export function GenAIMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              {metric.description}
              <span className={`ml-2 ${
                metric.trend.startsWith('+') 
                  ? 'text-green-500' 
                  : 'text-red-500'
              }`}>
                {metric.trend}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 