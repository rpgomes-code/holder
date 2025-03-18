import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[70vh] py-12">
            <h1 className="text-4xl font-bold mb-4 text-secondary-foreground">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>

            <p className="text-muted-foreground text-center max-w-md mb-8">
                The page you&#39;re looking for doesn&#39;t exist or has been moved.
                Let&#39;s get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/">
                    <Button size="lg">
                        Return Home
                    </Button>
                </Link>
            </div>

            <div className="mt-12 text-sm text-muted-foreground">
                Need help? <Link href="/contact" className="text-primary hover:underline">Contact support</Link>
            </div>
        </div>
    );
}