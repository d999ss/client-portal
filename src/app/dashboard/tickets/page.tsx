import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Plus, AlertCircle, CheckCircle2, Clock } from 'lucide-react'

export default function TicketsPage() {
  const tickets = [
    {
      id: 'TICK-001',
      title: 'Login page not loading on mobile',
      status: 'OPEN',
      priority: 'HIGH',
      category: 'BUG',
      createdAt: '2024-01-10',
      updatedAt: '2024-01-10',
      assignee: 'Alex Kumar',
    },
    {
      id: 'TICK-002',
      title: 'Request for dark mode feature',
      status: 'IN_PROGRESS',
      priority: 'MEDIUM',
      category: 'FEATURE_REQUEST',
      createdAt: '2024-01-08',
      updatedAt: '2024-01-09',
      assignee: 'Mike Chen',
    },
    {
      id: 'TICK-003',
      title: 'How to export data as CSV?',
      status: 'RESOLVED',
      priority: 'LOW',
      category: 'QUESTION',
      createdAt: '2024-01-05',
      updatedAt: '2024-01-06',
      assignee: 'Sarah Johnson',
    },
    {
      id: 'TICK-004',
      title: 'Invoice payment not reflecting',
      status: 'OPEN',
      priority: 'URGENT',
      category: 'BILLING',
      createdAt: '2024-01-09',
      updatedAt: '2024-01-09',
      assignee: 'Sarah Johnson',
    },
  ]

  const getStatusBadge = (status: string) => {
    const config = {
      OPEN: { icon: AlertCircle, variant: 'default' as const, label: 'Open' },
      IN_PROGRESS: { icon: Clock, variant: 'secondary' as const, label: 'In Progress' },
      RESOLVED: { icon: CheckCircle2, variant: 'outline' as const, label: 'Resolved' },
      CLOSED: { icon: CheckCircle2, variant: 'outline' as const, label: 'Closed' },
    }
    const { icon: Icon, variant, label } = config[status as keyof typeof config] || config.OPEN
    return (
      <Badge variant={variant} className="gap-1">
        <Icon className="w-3 h-3" />
        {label}
      </Badge>
    )
  }

  const getPriorityBadge = (priority: string) => {
    const colors = {
      URGENT: 'bg-red-500 text-white',
      HIGH: 'bg-orange-500 text-white',
      MEDIUM: 'bg-yellow-500 text-white',
      LOW: 'bg-green-500 text-white',
    }
    return (
      <Badge className={colors[priority as keyof typeof colors]}>
        {priority}
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Support Tickets</h1>
          <p className="text-muted-foreground">
            Get help from your project team
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Open Tickets</CardDescription>
            <CardTitle className="text-3xl">2</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>In Progress</CardDescription>
            <CardTitle className="text-3xl">1</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Resolved</CardDescription>
            <CardTitle className="text-3xl">1</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Avg Response Time</CardDescription>
            <CardTitle className="text-3xl">2h</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Tickets Table */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Tickets</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Support Tickets</CardTitle>
              <CardDescription>
                View and manage all your support requests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Assignee</TableHead>
                    <TableHead>Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>
                        <div className="max-w-md">
                          <p className="font-medium">{ticket.title}</p>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                      <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{ticket.category.replace('_', ' ')}</Badge>
                      </TableCell>
                      <TableCell className="text-sm">{ticket.assignee}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(ticket.updatedAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="open">
          <p className="text-muted-foreground">Open tickets will appear here</p>
        </TabsContent>

        <TabsContent value="in-progress">
          <p className="text-muted-foreground">In progress tickets will appear here</p>
        </TabsContent>

        <TabsContent value="resolved">
          <p className="text-muted-foreground">Resolved tickets will appear here</p>
        </TabsContent>
      </Tabs>

      {/* Help Section */}
      <Card>
        <CardHeader>
          <CardTitle>Need Help Creating a Ticket?</CardTitle>
          <CardDescription>
            Here's what information to include
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Bug Reports</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Steps to reproduce</li>
                <li>• Expected vs actual behavior</li>
                <li>• Screenshots if applicable</li>
                <li>• Browser and device info</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Feature Requests</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Describe the feature</li>
                <li>• Use case and benefits</li>
                <li>• Priority level</li>
                <li>• Any examples or mockups</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">General Questions</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Be specific and clear</li>
                <li>• Include relevant context</li>
                <li>• Reference related projects</li>
                <li>• Attach files if needed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
