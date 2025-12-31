import type { QuestionCardPreview } from '@/types/types';
import Link from 'next/link';

export default function QuestionPreviewCard({
  id,
  title,
  description,
}: Readonly<QuestionCardPreview>) {
  return (
    <Link href={`/question/${id}`} className="question-card">
      <h1 className="question-card-title ">{title}</h1>

      <p className="question-card-description">{description}</p>
    </Link>
  );
}
