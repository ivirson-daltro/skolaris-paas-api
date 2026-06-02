export interface SupabaseResponse<T> {
  data: T | null;
  error: {
    message: string;
  } | null;
}
