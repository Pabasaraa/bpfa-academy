import { Navigation } from "@/components/navigation";
import { ClassDetail } from "@/components/class-detail";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import classesData from "@/data/classes.json";

const classesDataMap = classesData.reduce((acc, classItem) => {
  acc[classItem.id] = classItem;
  return acc;
}, {} as Record<string, typeof classesData[0]>);

export default function ClassPage({ params }: { params: { slug: string } }) {
  const classData = classesDataMap[params.slug];

  if (!classData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ClassDetail classData={classData} />
      <Footer />
    </main>
  );
}
