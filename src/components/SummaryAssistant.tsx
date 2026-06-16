
"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { generateProfessionalSummary } from "@/ai/flows/generate-professional-summary";
import { Sparkles, Loader2 } from "lucide-react";

interface SummaryAssistantProps {
  onSummaryGenerated: (summary: string) => void;
}

export function SummaryAssistant({ onSummaryGenerated }: SummaryAssistantProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await generateProfessionalSummary({ bulletedInputs: input });
      onSummaryGenerated(result.summary);
      setOpen(false);
    } catch (error) {
      console.error("Failed to generate summary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 text-[#0A192F] border-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all">
          <Sparkles className="w-4 h-4" />
          AI Summary Assistant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>AI Content Assistant</DialogTitle>
          <DialogDescription>
            Input your experience and technical documentation as bullet points (starting with -) to generate a concise summary.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Textarea
            placeholder="- 5 years of full-stack development experience&#10;- Expert in systems documentation&#10;- Strong focus on UI/UX design..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[200px]"
          />
          <Button 
            onClick={handleGenerate} 
            disabled={loading || !input.trim()}
            className="w-full bg-[#0A192F]"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Summary"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
