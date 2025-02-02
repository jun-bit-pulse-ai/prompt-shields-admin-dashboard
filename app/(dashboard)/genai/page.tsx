import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GenAIMetrics } from './metrics';
import { GenAIUsageChart } from './usage-chart';
import { GenAIToolsDistribution } from './tools-distribution';
import { DataLeakageTable } from './data-leakage-table';

export default function GenAIDashboardPage() {
  return (
    <Tabs defaultValue="overview">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview" className="space-y-4">
        <GenAIMetrics />
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Gen AI Usage Trends</CardTitle>
              <CardDescription>
                Daily usage patterns across all Gen AI tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GenAIUsageChart />
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Tools Distribution</CardTitle>
              <CardDescription>
                Usage breakdown by Gen AI tool
              </CardDescription>
            </CardHeader>
            <CardContent>
              <GenAIToolsDistribution />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Data Leakage Prevention Events</CardTitle>
            <CardDescription>
              Latest blocked attempts and security incidents
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DataLeakageTable />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
} 