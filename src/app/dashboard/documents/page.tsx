import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Folder,
  FileText,
  Upload,
  Search,
  MoreVertical,
  Download,
  Eye,
  Trash2,
  Share2,
  Clock
} from 'lucide-react'

export default function DocumentsPage() {
  // Mock data
  const folders = [
    { name: 'Contracts', count: 8, icon: Folder },
    { name: 'Invoices', count: 12, icon: Folder },
    { name: 'Deliverables', count: 24, icon: Folder },
    { name: 'Shared Files', count: 15, icon: Folder },
  ]

  const recentDocuments = [
    {
      id: 1,
      name: 'Master Service Agreement 2024',
      type: 'PDF',
      size: '2.4 MB',
      uploadedBy: 'Sarah Johnson',
      uploadedAt: '2024-01-10',
      folder: 'Contracts',
      status: 'signed',
    },
    {
      id: 2,
      name: 'Project Proposal - Website Redesign',
      type: 'DOCX',
      size: '1.2 MB',
      uploadedBy: 'Mike Chen',
      uploadedAt: '2024-01-09',
      folder: 'Deliverables',
      status: 'review',
    },
    {
      id: 3,
      name: 'Invoice #2024-001',
      type: 'PDF',
      size: '156 KB',
      uploadedBy: 'System',
      uploadedAt: '2024-01-08',
      folder: 'Invoices',
      status: 'paid',
    },
    {
      id: 4,
      name: 'Design Mockups v3',
      type: 'ZIP',
      size: '45.8 MB',
      uploadedBy: 'Lisa Davis',
      uploadedAt: '2024-01-07',
      folder: 'Deliverables',
      status: 'approved',
    },
    {
      id: 5,
      name: 'Meeting Notes - Jan 5',
      type: 'PDF',
      size: '245 KB',
      uploadedBy: 'Alex Kumar',
      uploadedAt: '2024-01-05',
      folder: 'Shared Files',
      status: 'complete',
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { label: string; variant: 'default' | 'secondary' | 'outline' }> = {
      signed: { label: 'Signed', variant: 'default' },
      review: { label: 'In Review', variant: 'secondary' },
      paid: { label: 'Paid', variant: 'default' },
      approved: { label: 'Approved', variant: 'default' },
      complete: { label: 'Complete', variant: 'outline' },
    }
    const config = variants[status] || { label: status, variant: 'outline' }
    return <Badge variant={config.variant}>{config.label}</Badge>
  }

  const getFileIcon = (type: string) => {
    return <FileText className="w-4 h-4" />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground">
            Manage and access all your project files
          </p>
        </div>
        <Button>
          <Upload className="w-4 h-4 mr-2" />
          Upload Files
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Folders Grid */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Folders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {folders.map((folder) => (
            <Card key={folder.name} className="cursor-pointer hover:bg-accent transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base truncate">{folder.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {folder.count} files
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Documents Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Documents</CardTitle>
          <CardDescription>
            Documents uploaded or modified recently
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Folder</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Uploaded By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentDocuments.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getFileIcon(doc.type)}
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-muted-foreground">{doc.type}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{doc.folder}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {doc.size}
                  </TableCell>
                  <TableCell className="text-sm">
                    {doc.uploadedBy}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(doc.uploadedAt).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(doc.status)}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Storage Usage */}
      <Card>
        <CardHeader>
          <CardTitle>Storage Usage</CardTitle>
          <CardDescription>
            2.4 GB used of 5.0 GB available
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: '48%' }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              48% of your storage quota is being used
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
