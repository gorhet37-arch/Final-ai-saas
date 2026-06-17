import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const authAPI = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  signup: (data: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    password: string;
  }) => apiClient.post('/auth/signup', data),
  logout: () => apiClient.post('/auth/logout'),
  forgotPassword: (email: string) =>
    apiClient.post('/auth/forgot-password', { email }),
  resetPassword: (token: string, password: string) =>
    apiClient.post('/auth/reset-password', { token, password })
};

// Widget APIs
export const widgetAPI = {
  getWidgets: () => apiClient.get('/widgets'),
  createWidget: (data: any) => apiClient.post('/widgets', data),
  updateWidget: (id: string, data: any) => apiClient.patch(`/widgets/${id}`, data),
  deleteWidget: (id: string) => apiClient.delete(`/widgets/${id}`)
};

// API Key APIs
export const apiKeyAPI = {
  getKeys: () => apiClient.get('/api-keys'),
  createKey: (name: string) => apiClient.post('/api-keys', { name }),
  deleteKey: (id: string) => apiClient.delete(`/api-keys/${id}`)
};

// Analytics APIs
export const analyticsAPI = {
  getDashboard: (timeRange: string = '7d') =>
    apiClient.get(`/analytics/dashboard?range=${timeRange}`),
  getConversations: (page: number = 1, limit: number = 10) =>
    apiClient.get(`/analytics/conversations?page=${page}&limit=${limit}`),
  getLeads: (page: number = 1, limit: number = 10) =>
    apiClient.get(`/analytics/leads?page=${page}&limit=${limit}`),
  getMetrics: (timeRange: string = '7d') =>
    apiClient.get(`/analytics/metrics?range=${timeRange}`)
};

// Billing APIs
export const billingAPI = {
  getCurrentPlan: () => apiClient.get('/billing/current-plan'),
  upgradePlan: (planId: string) => apiClient.post('/billing/upgrade', { planId }),
  updatePaymentMethod: (data: any) =>
    apiClient.post('/billing/payment-method', data),
  getInvoices: () => apiClient.get('/billing/invoices'),
  downloadInvoice: (id: string) =>
    apiClient.get(`/billing/invoices/${id}/download`, { responseType: 'blob' })
};

// User APIs
export const userAPI = {
  getProfile: () => apiClient.get('/users/profile'),
  updateProfile: (data: any) => apiClient.patch('/users/profile', data),
  updatePassword: (currentPassword: string, newPassword: string) =>
    apiClient.post('/users/change-password', { currentPassword, newPassword }),
  deleteAccount: () => apiClient.delete('/users/account')
};

// Settings APIs
export const settingsAPI = {
  getSettings: () => apiClient.get('/settings'),
  updateSettings: (data: any) => apiClient.patch('/settings', data),
  getNotificationPreferences: () =>
    apiClient.get('/settings/notifications'),
  updateNotificationPreferences: (data: any) =>
    apiClient.patch('/settings/notifications', data)
};

export default apiClient;