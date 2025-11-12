import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  FolderOpen,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp
} from 'lucide-react'

export default function DashboardPage() {
  // This will be replaced with real data from API
  const stats = [
    { label: 'Active Projects', value: '3', icon: FolderOpen, change: '+2 this month' },
    { label: 'Documents', value: '24', icon: FileText, change: '8 new' },
    { label: 'Open Tickets', value: '2', icon: AlertCircle, change: 'Response time: 2h' },
    { label: 'Completed Tasks', value: '87%', icon: CheckCircle2, change: '+12% this week' },
  ]

  const recentActivity = [
    { action: 'Contract signed', file: 'MSA_2024.pdf', time: '2 hours ago', type: 'document' },
    { action: 'Milestone completed', project: 'Website Redesign', time: '5 hours ago', type: 'milestone' },
    { action: 'New message from Sarah', team: 'Project Lead', time: '1 day ago', type: 'message' },
    { action: 'Invoice paid', amount: '$5,000', time: '2 days ago', type: 'payment' },
  ]

  const projects = [
    {
      name: 'Website Redesign',
      status: 'IN_PROGRESS',
      progress: 75,
      dueDate: '2024-01-15',
      team: 3,
    },
    {
      name: 'Mobile App Development',
      status: 'QA',
      progress: 90,
      dueDate: '2024-01-30',
      team: 5,
    },
    {
      name: 'API Integration',
      status: 'IN_PROGRESS',
      progress: 45,
      dueDate: '2024-02-10',
      team: 2,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects & Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Active Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>
              Your ongoing projects and their progress
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {projects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Due {project.dueDate}
                    </p>
                  </div>
                  <Badge
                    variant={
                      project.status === 'QA' ? 'default' : 'secondary'
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <Progress value={project.progress} />
                <p className="text-sm text-muted-foreground">
                  {project.progress}% complete · {project.team} team members
                </p>
                {project !== projects[projects.length - 1] && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
            <Button className="w-full mt-4" variant="outline">
              View All Projects
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates across your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">
                    {activity.type === 'document' && (
                      <FileText className="w-4 h-4 text-blue-500" />
                    )}
                    {activity.type === 'milestone' && (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    )}
                    {activity.type === 'message' && (
                      <Clock className="w-4 h-4 text-orange-500" />
                    )}
                    {activity.type === 'payment' && (
                      <TrendingUp className="w-4 h-4 text-purple-500" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.file || activity.project || activity.team || activity.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4" variant="outline">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common tasks and shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button>Upload Document</Button>
          <Button variant="outline">Send Message</Button>
          <Button variant="outline">Create Ticket</Button>
          <Button variant="outline">View Invoices</Button>
        </CardContent>
      </Card>
    </div>
  )
}
