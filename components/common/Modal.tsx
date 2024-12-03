import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CommonModalProps } from "@/utils/types.ts/auth.types";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
export const CommonModal = ({
  triggerContent,
  title,
  description,
  children,
  loading,
  handleSaveChanges,
}: CommonModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerContent}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6 overflow-hidden">
        <DialogHeader className="border-b border-gray-200 pb-4 mb-4">
          <DialogTitle className="text-xl font-semibold text-gray-800">
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-600">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">{children}</div>

        <DialogFooter className="pt-4 mt-4 border-t border-gray-200">
          <div className="flex justify-end gap-4">
            <Button type="submit" onClick={handleSaveChanges}>
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <Loader2 className="animate-spin h-6 w-6 text-blue-500" />
                  <span>Loading...</span>
                </div>
              ) : (
                "Save changes"
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
