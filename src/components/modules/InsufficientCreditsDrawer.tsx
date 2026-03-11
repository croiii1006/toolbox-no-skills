import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Rocket } from 'lucide-react';

interface InsufficientCreditsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  shortfall: number;
}

export function InsufficientCreditsDrawer({ open, onOpenChange, shortfall }: InsufficientCreditsDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
            算力储量不足
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <p className="text-sm text-muted-foreground">
            ⚠️ 算力储量不足 (缺口: <span className="font-semibold text-foreground tabular-nums">{shortfall}</span> credit)
          </p>

          <div className="space-y-3">
            <Button
              className="w-full justify-center gap-2 rounded-xl"
              variant="outline"
              onClick={() => {
                window.open('https://www.oran.cn/', '_blank');
                onOpenChange(false);
              }}
            >
              快捷充值 $5 (45 credit)
            </Button>
            <Button
              className="w-full justify-center gap-2 rounded-xl"
              onClick={() => {
                window.open('https://www.oran.cn/', '_blank');
                onOpenChange(false);
              }}
            >
              <Rocket className="w-4 h-4" />
              升级 Pro 套餐 (最划算)
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
