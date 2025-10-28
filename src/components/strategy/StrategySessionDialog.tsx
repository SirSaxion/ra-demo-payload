"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import StrategySessionContent from "@/components/strategy/StrategySessionContent";

type StrategyDialogContextType = {
  open: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

const StrategyDialogContext = createContext<StrategyDialogContextType | null>(null);

export function useStrategyDialog() {
  const ctx = useContext(StrategyDialogContext);
  if (!ctx) throw new Error("useStrategyDialog must be used within StrategySessionDialogProvider");
  return ctx;
}

export function StrategySessionDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const ctx = useMemo(
    () => ({ open, openDialog: () => setOpen(true), closeDialog: () => setOpen(false) }),
    [open],
  );

  return (
    <StrategyDialogContext.Provider value={ctx}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogOverlay />
        <DialogContent className="p-0 overflow-hidden bg-transparent border-none shadow-2xl">
          <DialogTitle className="sr-only">Vrijblijvende strategiesessie</DialogTitle>
          <StrategySessionContent />
        </DialogContent>
      </Dialog>
    </StrategyDialogContext.Provider>
  );
}


