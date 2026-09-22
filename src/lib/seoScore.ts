/**
 * Shared SEO scoring utilities.
 * Replaces duplicate calculateSeoScore functions in AdminPanel.tsx and AdminSeoAuditTab.tsx.
 */

/** Calculates an SEO quality score (0-100) for a blog post */
export function calcPostSeoScore(post: Record<string, any>): number {
  let score = 0;

  const titleLength = (post.seoTitle || post.title || '').length;
  if (titleLength > 10 && titleLength <= 60) score += 25;
  else if (titleLength > 0 && titleLength <= 80) score += 15;

  const descLength = (post.seoDescription || post.excerpt || '').length;
  if (descLength > 50 && descLength <= 160) score += 25;
  else if (descLength > 0 && descLength <= 200) score += 15;

  const wordCount = post.content ? post.content.split(/\s+/).length : 0;
  if (wordCount > 300) score += 30;
  else if (wordCount > 100) score += 15;

  if (post.image) score += 10;
  if (post.tags && post.tags.length > 0) score += 10;

  return Math.min(100, Math.max(0, score));
}

/** Calculates an SEO quality score (0-100) for a portfolio work */
export function calcWorkSeoScore(work: Record<string, any>): number {
  let score = 0;

  const titleLength = (work.title || '').length;
  if (titleLength > 10 && titleLength <= 60) score += 25;
  else if (titleLength > 0 && titleLength <= 80) score += 15;

  const descLength = (work.description || '').length;
  if (descLength > 50 && descLength <= 160) score += 25;
  else if (descLength > 0 && descLength <= 200) score += 15;

  if (work.titleImage) score += 25;
  if (work.tags && work.tags.length > 0) score += 10;
  if (work.mediaUrls && work.mediaUrls.length > 0) score += 15;

  return Math.min(100, Math.max(0, score));
}

/** Returns Tailwind colour classes for a given score value */
export function seoScoreColour(score: number): string {
  if (score >= 80) return 'text-green-400 bg-green-400/10 border-green-500/20';
  if (score >= 50) return 'text-yellow-400 bg-yellow-400/10 border-yellow-500/20';
  return 'text-red-400 bg-red-400/10 border-red-500/20';
}
