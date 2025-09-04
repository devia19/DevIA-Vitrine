export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  company?: string
  plan: 'free' | 'starter' | 'pro' | 'enterprise'
  call_quota: number
  calls_used: number
  sms_quota: number
  sms_used: number
  is_admin: boolean
  created_at: string
  updated_at: string
}

export interface CallLog {
  id: string
  user_id: string
  phone_number: string
  duration: number
  status: 'completed' | 'failed' | 'in_progress'
  type: 'incoming' | 'outgoing'
  notes?: string
  created_at: string
}

export interface Appointment {
  id: string
  user_id: string
  client_name: string
  client_phone: string
  appointment_date: string
  appointment_time: string
  status: 'scheduled' | 'confirmed' | 'cancelled' | 'completed'
  notes?: string
  created_at: string
  updated_at: string
}

export interface SMSLog {
  id: string
  user_id: string
  phone_number: string
  message: string
  status: 'sent' | 'delivered' | 'failed'
  created_at: string
}

export interface UserActivity {
  id: string
  user_id: string
  activity_type: 'login' | 'call' | 'sms' | 'appointment' | 'subscription_change'
  description: string
  metadata?: Record<string, any>
  created_at: string
}

export interface Subscription {
  id: string
  user_id: string
  plan: 'free' | 'starter' | 'pro' | 'enterprise'
  status: 'active' | 'cancelled' | 'past_due'
  current_period_start: string
  current_period_end: string
  stripe_customer_id?: string
  stripe_subscription_id?: string
  created_at: string
  updated_at: string
}

// Types pour les statistiques admin
export interface AdminStats {
  totalUsers: number
  activeUsers: number
  totalCalls: number
  totalAppointments: number
  totalSMS: number
  revenueByPlan: {
    free: number
    starter: number
    pro: number
    enterprise: number
  }
  recentActivity: UserActivity[]
}

// Types pour les filtres admin
export interface AdminFilters {
  dateFrom?: string
  dateTo?: string
  plan?: string
  status?: string
  search?: string
} 