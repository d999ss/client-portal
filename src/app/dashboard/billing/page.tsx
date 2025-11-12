import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CreditCard, Download, CheckCircle2, AlertCircle } from 'lucide-react'

export default function BillingPage() {
  const subscription = {
    plan: 'Professional',
    status: 'active',
    amount: 99,
    currency: 'USD',
    interval: 'month',
    nextBillingDate: '2024-02-01',
    paymentMethod: 'Visa ending in 4242',
  }

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-01-01',
      amount: 99,
      status: 'paid',
      pdfUrl: '#',
    },
    {
      id: 'INV-2023-012',
      date: '2023-12-01',
      amount: 99,
      status: 'paid',
      pdfUrl: '#',
    },
    {
      id: 'INV-2023-011',
      date: '2023-11-01',
      amount: 99,
      status: 'paid',
      pdfUrl: '#',
    },
    {
      id: 'INV-2023-010',
      date: '2023-10-01',
      amount: 99,
      status: 'paid',
      pdfUrl: '#',
    },
  ]

  const plans = [
    {
      name: 'Starter',
      price: 49,
      features: [
        '1 Active Project',
        '5GB Storage',
        'Email Support',
        'Basic Features',
      ],
      current: false,
    },
    {
      name: 'Professional',
      price: 99,
      features: [
        '5 Active Projects',
        '50GB Storage',
        'Priority Support',
        'Advanced Features',
        'API Access',
      ],
      current: true,
    },
    {
      name: 'Enterprise',
      price: 299,
      features: [
        'Unlimited Projects',
        '500GB Storage',
        '24/7 Support',
        'All Features',
        'Custom Integration',
        'Dedicated Manager',
      ],
      current: false,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-muted-foreground">
          Manage your subscription and payment methods
        </p>
      </div>

      {/* Current Subscription */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>
                Your subscription is active and will renew automatically
              </CardDescription>
            </div>
            <Badge variant="default" className="gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Plan</p>
                <p className="text-2xl font-bold">{subscription.plan}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Billing Amount</p>
                <p className="text-2xl font-bold">
                  ${subscription.amount}/{subscription.interval}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Next Billing Date</p>
                <p className="text-lg font-medium">
                  {new Date(subscription.nextBillingDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Payment Method</p>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{subscription.paymentMethod}</p>
                    <p className="text-xs text-muted-foreground">Expires 12/2025</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Update Payment Method
                </Button>
                <Button variant="outline" className="w-full">
                  Manage Subscription
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.current ? 'border-primary' : ''}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.current && (
                    <Badge variant="default">Current Plan</Badge>
                  )}
                </div>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.current ? 'outline' : 'default'}
                  className="w-full"
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' :
                   plan.price > subscription.amount ? 'Upgrade' : 'Downgrade'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Invoice History */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice History</CardTitle>
          <CardDescription>
            Download past invoices and view payment history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>
                    {new Date(invoice.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={invoice.status === 'paid' ? 'default' : 'destructive'}>
                      {invoice.status === 'paid' ? (
                        <><CheckCircle2 className="w-3 h-3 mr-1" />Paid</>
                      ) : (
                        <><AlertCircle className="w-3 h-3 mr-1" />Unpaid</>
                      )}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Billing Info */}
      <Card>
        <CardHeader>
          <CardTitle>Billing Information</CardTitle>
          <CardDescription>
            Update your billing details and address
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-1">Company Name</p>
              <p className="text-sm text-muted-foreground">Acme Corporation</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Billing Email</p>
              <p className="text-sm text-muted-foreground">billing@acme.com</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Address</p>
              <p className="text-sm text-muted-foreground">
                123 Main Street, Suite 100<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Tax ID</p>
              <p className="text-sm text-muted-foreground">12-3456789</p>
            </div>
          </div>
          <Button variant="outline">
            Update Billing Information
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
