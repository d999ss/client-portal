import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Send, Search, Paperclip } from 'lucide-react'

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      user: 'Sarah Johnson',
      role: 'Project Lead',
      lastMessage: 'Great! I\'ll send over the updated designs by EOD.',
      timestamp: '10 min ago',
      unread: 2,
      online: true,
    },
    {
      id: 2,
      user: 'Mike Chen',
      role: 'Lead Designer',
      lastMessage: 'Here are the mockups you requested',
      timestamp: '2 hours ago',
      unread: 0,
      online: true,
    },
    {
      id: 3,
      user: 'Alex Kumar',
      role: 'Senior Developer',
      lastMessage: 'The API integration is complete',
      timestamp: '1 day ago',
      unread: 1,
      online: false,
    },
  ]

  const currentMessages = [
    {
      id: 1,
      sender: 'Sarah Johnson',
      isMe: false,
      content: 'Hi! I wanted to give you an update on the website redesign project.',
      timestamp: '2:30 PM',
    },
    {
      id: 2,
      sender: 'You',
      isMe: true,
      content: 'That would be great! How are things progressing?',
      timestamp: '2:32 PM',
    },
    {
      id: 3,
      sender: 'Sarah Johnson',
      isMe: false,
      content: 'We\'re making excellent progress. The design phase is complete and we\'re moving into development.',
      timestamp: '2:35 PM',
    },
    {
      id: 4,
      sender: 'You',
      isMe: true,
      content: 'Wonderful! Can you send over the final designs?',
      timestamp: '2:36 PM',
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      isMe: false,
      content: 'Great! I\'ll send over the updated designs by EOD.',
      timestamp: '2:38 PM',
    },
  ]

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground">
          Chat with your project team
        </p>
      </div>

      <Card className="flex-1 flex overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 border-r flex flex-col">
          <CardHeader className="border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search messages..."
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                className="w-full p-4 hover:bg-accent text-left border-b transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={undefined} />
                      <AvatarFallback>
                        {conv.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {conv.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <p className="font-medium text-sm">{conv.user}</p>
                        <p className="text-xs text-muted-foreground">{conv.role}</p>
                      </div>
                      {conv.unread > 0 && (
                        <Badge variant="default" className="ml-2">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conv.lastMessage}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {conv.timestamp}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </div>

        {/* Message Thread */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={undefined} />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                <CardDescription>Project Lead</CardDescription>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-auto p-6 space-y-4">
            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] ${
                    msg.isMe
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  } rounded-lg p-3`}
                >
                  {!msg.isMe && (
                    <p className="text-xs font-medium mb-1">{msg.sender}</p>
                  )}
                  <p className="text-sm">{msg.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      msg.isMe ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}
                  >
                    {msg.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="w-4 h-4" />
              </Button>
              <Textarea
                placeholder="Type your message..."
                className="resize-none"
                rows={2}
              />
              <Button size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
