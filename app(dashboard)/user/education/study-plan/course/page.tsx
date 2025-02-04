import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Inside your CoursePage component, replace the coins emoji div with:
<Dialog>
  <DialogTrigger>
    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
      <span className="text-lg">🎯</span>
    </div>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎯</span>
        <span className="text-xl font-bold">250 coins</span>
      </div>
      <Button 
        variant="primary"
        className="w-full"
        onClick={() => router.push('/shop')}
      >
        Buy More
      </Button>
    </div>
  </DialogContent>
</Dialog>
