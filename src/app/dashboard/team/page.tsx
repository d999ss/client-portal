import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Mail,
  Phone,
  Calendar,
  Clock,
  MessageSquare,
  Video,
  Globe
} from 'lucide-react'

export default function TeamPage() {
  // Mock data - will be replaced with API calls
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Project Lead',
      email: 'sarah@agency.com',
      phone: '+1 (555) 123-4567',
      avatar: null,
      status: 'online',
      expertise: ['Project Management', 'Client Relations', 'Strategy'],
      timezone: 'EST (UTC-5)',
      workingHours: '9:00 AM - 6:00 PM',
      calendly: 'https://calendly.com/sarah',
      bio: 'With over 10 years of experience in project management, Sarah ensures every project runs smoothly from start to finish.',
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Lead Designer',
      email: 'mike@agency.com',
      phone: '+1 (555) 234-5678',
      avatar: null,
      status: 'online',
      expertise: ['UI/UX Design', 'Brand Identity', 'Prototyping'],
      timezone: 'PST (UTC-8)',
      workingHours: '10:00 AM - 7:00 PM',
      calendly: 'https://calendly.com/mike',
      bio: 'Mike specializes in creating beautiful, user-centered designs that drive engagement and conversions.',
    },
    {
      id: 3,
      name: 'Alex Kumar',
      title: 'Senior Developer',
      email: 'alex@agency.com',
      phone: '+1 (555) 345-6789',
      avatar: null,
      status: 'busy',
      expertise: ['React', 'Node.js', 'TypeScript', 'DevOps'],
      timezone: 'EST (UTC-5)',
      workingHours: '8:00 AM - 5:00 PM',
      calendly: 'https://calendly.com/alex',
      bio: 'Alex is a full-stack developer with expertise in modern web technologies and cloud infrastructure.',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      title: 'Tech Lead',
      email: 'emma@agency.com',
      phone: '+1 (555) 456-7890',
      avatar: null,
      status: 'away',
      expertise: ['Architecture', 'APIs', 'Mobile Development'],
      timezone: 'CST (UTC-6)',
      workingHours: '9:00 AM - 6:00 PM',
      calendly: 'https://calendly.com/emma',
      bio: 'Emma leads technical architecture decisions and ensures scalable, maintainable code.',
    },
    {
      id: 5,
      name: 'James Lee',
      title: 'iOS Developer',
      email: 'james@agency.com',
      phone: '+1 (555) 567-8901',
      avatar: null,
      status: 'offline',
      expertise: ['Swift', 'iOS', 'Mobile UI'],
      timezone: 'PST (UTC-8)',
      workingHours: '11:00 AM - 8:00 PM',
      calendly: 'https://calendly.com/james',
      bio: 'James builds native iOS applications with a focus on performance and user experience.',
    },
    {
      id: 6,
      name: 'Lisa Davis',
      title: 'Product Designer',
      email: 'lisa@agency.com',
      phone: '+1 (555) 678-9012',
      avatar: null,
      status: 'online',
      expertise: ['Product Design', 'User Research', 'Design Systems'],
      timezone: 'EST (UTC-5)',
      workingHours: '9:00 AM - 6:00 PM',
      calendly: 'https://calendly.com/lisa',
      bio: 'Lisa creates intuitive product experiences backed by user research and data.',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500'
      case 'busy':
        return 'bg-yellow-500'
      case 'away':
        return 'bg-orange-500'
      case 'offline':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Team Directory</h1>
        <p className="text-muted-foreground">
          Meet your project team and get in touch
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Team Members</CardDescription>
            <CardTitle className="text-3xl">6</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Online Now</CardDescription>
            <CardTitle className="text-3xl">3</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Average Response</CardDescription>
            <CardTitle className="text-3xl">2h</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Support Hours</CardDescription>
            <CardTitle className="text-3xl">24/5</CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={member.avatar || undefined} />
                    <AvatarFallback className="text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(member.status)}`}
                    title={getStatusLabel(member.status)}
                  />
                </div>
                <div className="flex-1">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.title}</CardDescription>
                  <div className="flex items-center gap-1 mt-1">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)}`} />
                    <span className="text-xs text-muted-foreground">
                      {getStatusLabel(member.status)}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Bio */}
              <p className="text-sm text-muted-foreground">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 pt-2 border-t">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <a href={`mailto:${member.email}`} className="hover:underline">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <a href={`tel:${member.phone}`} className="hover:underline">
                    {member.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{member.timezone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{member.workingHours}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button size="sm" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button size="sm" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule
                </Button>
                <Button size="sm" variant="outline">
                  <Video className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support Info */}
      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
          <CardDescription>
            Our team is here to support you throughout your project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">General Support</h4>
              <p className="text-sm text-muted-foreground">
                For general questions and assistance
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Create Support Ticket
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Emergency Contact</h4>
              <p className="text-sm text-muted-foreground">
                For urgent production issues
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Call Emergency Line
              </Button>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Schedule Meeting</h4>
              <p className="text-sm text-muted-foreground">
                Book time with your project lead
              </p>
              <Button variant="outline" size="sm" className="w-full">
                View Calendar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
