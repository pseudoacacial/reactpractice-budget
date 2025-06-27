export function splitToPages<T>(data: T[], rowsPerPage: number): T[][] {
  const pages: T[][] = [];
  data.forEach((row, index) => {
    const pageIndex = Math.floor(index / rowsPerPage);
    if (!pages[pageIndex]) {
      pages[pageIndex] = [];
    }
    pages[pageIndex].push(row);
  });
  return pages;
}
