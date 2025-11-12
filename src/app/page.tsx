import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Shield, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Secure File Storage',
      description: 'Enterprise-grade encryption for all your documents and contracts',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Direct messaging and real-time updates with your project team',
    },
    {
      icon: Clock,
      title: 'Project Tracking',
      description: 'Monitor milestones, progress, and deadlines in real-time',
    },
    {
      icon: CheckCircle2,
      title: 'Support Tickets',
      description: 'Get help quickly with our integrated support system',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">Portal</div>
          <div className="flex gap-4">
            <Link href="/sign-in">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Your Client Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Manage projects, share documents, and collaborate with your development team
            all in one secure platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/sign-up">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to manage your projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="w-10 h-10 mb-2 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to streamline your client projects?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of businesses using our platform to deliver exceptional client experiences.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="text-lg px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Client Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
