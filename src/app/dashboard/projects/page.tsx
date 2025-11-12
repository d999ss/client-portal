import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react'

export default function ProjectsPage() {
  // Mock data - will be replaced with API calls
  const projects = [
    {
      id: 1,
      name: 'Website Redesign',
      status: 'IN_PROGRESS',
      progress: 75,
      startDate: '2023-12-01',
      endDate: '2024-01-15',
      budget: 15000,
      spent: 11250,
      description: 'Complete overhaul of company website with modern design and improved UX',
      team: [
        { name: 'Sarah Johnson', role: 'Project Lead', avatar: null },
        { name: 'Mike Chen', role: 'Designer', avatar: null },
        { name: 'Alex Kumar', role: 'Developer', avatar: null },
      ],
      milestones: [
        { title: 'Design Phase', completed: true },
        { title: 'Development Phase', completed: true },
        { title: 'QA Testing', completed: false },
        { title: 'Launch', completed: false },
      ],
    },
    {
      id: 2,
      name: 'Mobile App Development',
      status: 'QA',
      progress: 90,
      startDate: '2023-11-15',
      endDate: '2024-01-30',
      budget: 45000,
      spent: 40500,
      description: 'Native iOS and Android app with offline capabilities',
      team: [
        { name: 'Emma Wilson', role: 'Tech Lead', avatar: null },
        { name: 'James Lee', role: 'iOS Developer', avatar: null },
        { name: 'Priya Patel', role: 'Android Developer', avatar: null },
        { name: 'Tom Brown', role: 'QA Engineer', avatar: null },
        { name: 'Lisa Davis', role: 'Designer', avatar: null },
      ],
      milestones: [
        { title: 'Planning & Design', completed: true },
        { title: 'Backend Development', completed: true },
        { title: 'Mobile Development', completed: true },
        { title: 'QA & Testing', completed: false },
      ],
    },
    {
      id: 3,
      name: 'API Integration',
      status: 'IN_PROGRESS',
      progress: 45,
      startDate: '2024-01-05',
      endDate: '2024-02-10',
      budget: 8000,
      spent: 3600,
      description: 'Integrate third-party APIs for payment processing and analytics',
      team: [
        { name: 'David Kim', role: 'Backend Lead', avatar: null },
        { name: 'Rachel Green', role: 'Developer', avatar: null },
      ],
      milestones: [
        { title: 'API Research', completed: true },
        { title: 'Authentication Setup', completed: true },
        { title: 'Integration Development', completed: false },
        { title: 'Testing & Documentation', completed: false },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'IN_PROGRESS':
        return 'default'
      case 'QA':
        return 'secondary'
      case 'COMPLETE':
        return 'outline'
      default:
        return 'default'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">
            Manage and track your active projects
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <Badge variant={getStatusColor(project.status)}>
                    {project.status.replace('_', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Overall Progress</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Timeline</p>
                      <p className="text-sm font-medium">
                        {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Team</p>
                      <p className="text-sm font-medium">{project.team.length} members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Budget</p>
                      <p className="text-sm font-medium">
                        ${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Budget Used</p>
                      <p className="text-sm font-medium">
                        {Math.round((project.spent / project.budget) * 100)}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Milestones</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {project.milestones.map((milestone, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 p-2 rounded-md ${
                          milestone.completed ? 'bg-green-50 dark:bg-green-950' : 'bg-muted'
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            milestone.completed ? 'bg-green-500' : 'bg-muted-foreground'
                          }`}
                        />
                        <span className="text-xs">{milestone.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div>
                  <h4 className="text-sm font-medium mb-3">Team Members</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.team.map((member, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={member.avatar || undefined} />
                          <AvatarFallback>
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{member.name}</p>
                          <p className="text-xs text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    View Documents
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Messages
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">
          <p className="text-muted-foreground">Active projects will appear here</p>
        </TabsContent>

        <TabsContent value="completed">
          <p className="text-muted-foreground">Completed projects will appear here</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
