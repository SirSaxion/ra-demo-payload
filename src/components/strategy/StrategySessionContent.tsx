"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock3, Globe2 } from "lucide-react";
import { nl } from "date-fns/locale";

type TimeSlot = string;

const DEFAULT_TIMES: TimeSlot[] = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "15:00",
  "15:30",
  "16:00",
];

export function StrategySessionContent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2025, 7, 12));
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [timezone, setTimezone] = useState("Europe/Amsterdam|GMT+02:00");
  const tapeText = "wordt vervangen door echte widget";
  const repeatedTapeText = useMemo(() => Array(24).fill(` ${tapeText} `).join(" • "), [tapeText]);

  const dateLabel = useMemo(() => {
    if (!selectedDate) return "Kies een datum";
    const day = selectedDate.toLocaleDateString("nl-NL", { weekday: "short" });
    const dayNum = selectedDate.toLocaleDateString("nl-NL", { day: "2-digit" });
    const month = selectedDate.toLocaleDateString("nl-NL", { month: "short" });
    const year = selectedDate.getFullYear();
    const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    return `${cap(day)}, ${dayNum} ${cap(month)} ${year}`;
  }, [selectedDate]);

  return (
    <Card className="relative overflow-hidden border-[var(--color-border)] bg-card/90 backdrop-blur-sm p-0">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[var(--brand-500)] to-[var(--brand-200)]" />
      <CardContent className="p-0">
        <div className="grid gap-0 md:grid-cols-[360px_1fr]">
          {/* Left info panel */}
          <div className="border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-surface-1)]/60 p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-extrabold tracking-tight">Vrijblijvende strategiesessie</h3>
              <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                <span className="inline-flex items-center gap-2"><Clock3 className="size-4 text-[var(--brand-500)]" />45 Min.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                <span className="inline-flex items-center gap-2"><CalendarDays className="size-4 text-[var(--brand-500)]" />{dateLabel}</span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                Welkom bij onze kalenderplanner. Kies je datum en tijdstip en leg je afspraak vast!
              </p>

              <div className="space-y-2 text-[15px] text-[var(--color-text-secondary)]">
                <div>We zullen het volgende bespreken:</div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block size-1.5 rounded-full bg-[var(--brand-500)]" />
                    <span>
                      Huidige situatie: We nemen de tijd om jouw huidige positie binnen het bedrijf goed te begrijpen.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 inline-block size-1.5 rounded-full bg-[var(--brand-500)]" />
                    <span>
                      Toekomstvisie: We krijgen een helder beeld van waar jij met je bedrijf naartoe wilt.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: calendar + times */}
          <div className="p-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_220px]">
              <div className="relative">
                <div className="mb-3 text-sm font-medium text-[var(--color-text-secondary)]">Selecteer datum en tijd</div>
                <div className="rounded-xl border border-[var(--color-border)] bg-background/60 p-3">
                  <Calendar
                    locale={nl}
                    defaultMonth={new Date(2025, 7, 1)}
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                  />
                </div>
              </div>

              {/* Time slots */}
              <div>
                <div className="hidden lg:block h-[44px]" />
                <div className="flex flex-col gap-3">
                  {DEFAULT_TIMES.map((time) => {
                    const active = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={
                          "h-12 rounded-xl border text-sm font-semibold transition-all hover:-translate-y-0.5 " +
                          (active
                            ? "bg-[var(--brand-500)] text-[var(--color-accent-contrast)] border-[var(--brand-500)] shadow-[0_10px_30px_color-mix(in_oklab,var(--brand-500)_25%,transparent)]"
                            : "border-[var(--brand-500)] text-[var(--brand-500)] hover:bg-[color-mix(in_oklab,var(--brand-500)_12%,transparent)]")
                        }
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Timezone */}
            <div className="mt-8">
              <div className="text-sm font-medium text-foreground">Tijdzone</div>
              <div className="mt-2 flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                <Globe2 className="size-4 text-[var(--brand-500)]" />
                <Select value={timezone} onValueChange={setTimezone}>
                  <SelectTrigger>
                    <SelectValue placeholder="Kies tijdzone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Europe/Amsterdam|GMT+02:00">GMT+02:00 Europe/Amsterdam (GMT+2)</SelectItem>
                    <SelectItem value="Europe/Berlin|GMT+02:00">GMT+02:00 Europe/Berlin (GMT+2)</SelectItem>
                    <SelectItem value="Europe/London|GMT+01:00">GMT+01:00 Europe/London (GMT+1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-[var(--color-text-muted)]">
                30 minuten • Waarde €1000 • Vrijblijvend
              </div>
              <Button
                disabled={!selectedDate || !selectedTime}
                className="rounded-xl bg-[var(--brand-500)] text-[var(--color-accent-contrast)] px-6 py-5 font-bold shadow-[0_10px_30px_color-mix(in_oklab,var(--brand-500)_25%,transparent)] hover:bg-[var(--brand-600)]"
              >
                Bevestig afspraak
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Construction tape overlay */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Tape 1 */}
        <div
          className="absolute left-[-20%] right-[-20%] top-1/3 h-14 rotate-12 rounded-sm opacity-90 shadow-2xl ring-2 ring-black/40"
          style={{
            background:
              "repeating-linear-gradient(135deg, rgba(250,204,21,0.95) 0 18px, rgba(17,17,17,0.95) 18px 36px)",
          }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6">
              <div
                className="whitespace-nowrap text-center text-[18px] md:text-[20px] font-black uppercase tracking-wide text-white"
              >
                {repeatedTapeText}
              </div>
            </div>
          </div>
        </div>
        {/* Tape 2 */}
        <div
          className="absolute left-[-20%] right-[-20%] bottom-1/3 h-14 -rotate-12 rounded-sm opacity-90 shadow-2xl ring-2 ring-black/40"
          style={{
            background:
              "repeating-linear-gradient(135deg, rgba(250,204,21,0.95) 0 18px, rgba(17,17,17,0.95) 18px 36px)",
          }}
        >
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-6">
              <div
                className="whitespace-nowrap text-center text-[18px] md:text-[20px] font-black uppercase tracking-wide text-white"
              >
                {repeatedTapeText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default StrategySessionContent;


