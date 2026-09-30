export type StaffId = "sam" | "ana" | "robin" | "kai" | "jess";

export type Staff = {
  id: StaffId;
  name: string;
  role: string;
  /** Shift as written on the roster, or null when off today. */
  shift: string | null;
  onShiftToday: boolean;
  /** Takes customer bookings (calendar filter chips). */
  bookable: boolean;
};

export const staff: Staff[] = [
  {
    id: "sam",
    name: "Sam",
    role: "Practitioner",
    shift: "8:30–4:30",
    onShiftToday: true,
    bookable: true,
  },
  {
    id: "ana",
    name: "Ana",
    role: "Practitioner",
    shift: "9:00–5:00",
    onShiftToday: true,
    bookable: true,
  },
  {
    id: "robin",
    name: "Robin",
    role: "Front desk",
    shift: "8:00–5:00",
    onShiftToday: true,
    bookable: false,
  },
  {
    id: "kai",
    name: "Kai",
    role: "Practitioner",
    shift: "12:00–6:00",
    onShiftToday: true,
    bookable: true,
  },
  {
    id: "jess",
    name: "Jess",
    role: "Practitioner",
    shift: null,
    onShiftToday: false,
    bookable: false,
  },
];

export function getStaff(id: StaffId): Staff {
  const person = staff.find((item) => item.id === id);
  if (!person) throw new Error(`Unknown staff id: ${id}`);
  return person;
}

export const bookableStaff = staff.filter((person) => person.bookable);

export const onShiftToday = staff.filter((person) => person.onShiftToday);

export const offToday = staff
  .filter((person) => !person.onShiftToday)
  .map((person) => person.name);

/** Roster rows exactly as shown on /demo/tasks#roster. */
export const rosterLines = onShiftToday.map((person) =>
  person.id === "robin"
    ? `${person.name} — ${person.role}, ${person.shift}`
    : `${person.name} — ${person.shift}`,
);

export const offTodayLine = `Off today: ${offToday.join(", ")}`;

export const teamTileLine = "Sam, Ana, Robin (desk), Kai";

/** 100 = the desk is covered for all opening hours today; the label carries the meaning. */
export const deskCoverage = {
  label: "Desk covered until 5:00 pm",
  percent: 100,
} as const;
