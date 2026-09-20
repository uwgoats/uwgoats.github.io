import { getCollection } from 'astro:content';

export const typeOrder = ['paper', 'project', 'video', 'article', 'other'];

// Sorted the same way the References page lists them, so a reference's
// position here is its citation number ([1], [2], ...) across the whole site.
export async function getSortedReferences() {
  const all = await getCollection('references');
  return all.sort((a, b) => {
    const orderDiff = typeOrder.indexOf(a.data.type) - typeOrder.indexOf(b.data.type);
    if (orderDiff !== 0) return orderDiff;
    return a.data.title.localeCompare(b.data.title);
  });
}
