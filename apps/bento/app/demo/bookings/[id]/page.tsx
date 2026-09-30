import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bookingIds, getBooking } from "../../../_data/bookings";
import { customerHref } from "../../../_data/customers";
import { getStaff } from "../../../_data/staff";
import { BookingDetail } from "./_page/BookingDetail";
import { bookingDetailSeo } from "./_page/content";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return bookingIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const booking = getBooking((await params).id);
  if (!booking) return { title: { absolute: bookingDetailSeo.notFoundTitle } };
  return {
    title: { absolute: bookingDetailSeo.title(booking.customer) },
    description: bookingDetailSeo.description,
  };
}

export default async function Page({ params }: Props) {
  const booking = getBooking((await params).id);
  if (!booking) notFound();
  const person = getStaff(booking.staffId);

  return (
    <BookingDetail
      booking={booking}
      customerLink={customerHref(booking.customerId)}
      staff={{ name: person.name, role: person.role }}
    />
  );
}
