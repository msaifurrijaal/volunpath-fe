export interface CategoryEventType {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface EventType {
  id: number;
  organizer_id: number;
  title: string;
  description: string;
  additional_info: string | null;
  date: string;
  location: string;
  image: string;
  slots_needed: number;
  slots_available: number;
  category_id: number;
  status: string;
  created_at: string;
  updated_at: string;
  category: CategoryEventType;
}
