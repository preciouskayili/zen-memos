Need to install the following packages:
  supabase
Ok to proceed? (y) export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          color: string
          content: string
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          color: string
          content: string
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          color?: string
          content?: string
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
