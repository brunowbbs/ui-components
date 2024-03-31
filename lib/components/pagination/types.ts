export interface PaginationProps {
  totalPages: number;
  selectedPage: number;
  handleSelectPage: (pageNumber: number) => void;
}
