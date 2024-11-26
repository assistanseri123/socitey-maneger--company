import React, { useState } from 'react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FiPlus, FiBell, FiSearch } from 'react-icons/fi';
import { StatCard } from './StatCard';
import { ComplaintRow } from './ComplaintRow';
import { Sidebar } from './Sidebar';
import { ImportantNumber } from './ImportantNumber';
import { PendingMaintenance } from './PendingMaintenance';
import { UpcomingActivity } from './UpcomingActivity';
import { AddImportantNumber } from '../dashboardmodals/AddImportantNumber';
import { Notification } from './Notification';

interface DashboardProps {
  onLogout: () => void;
}

const data = [
  { name: 'Jan', value: 10000 },
  { name: 'Feb', value: 15000 },
  { name: 'Mar', value: 20000 },
  { name: 'Apr', value: 25000 },
  { name: 'May', value: 30000 },
  { name: 'Jun', value: 35000 },
  { name: 'Jul', value: 55000 },
];

export function Dashboard({ onLogout }: DashboardProps) {
  const [isAddNumberOpen, setIsAddNumberOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [importantNumbers] = useState([
    {
      id: 1,
      name: 'Hamna Darin',
      phoneNumber: '+91 99567 33567',
      work: 'Plumber'
    },
    {
      id: 2,
      name: 'Hamna Darin',
      phoneNumber: '+91 99567 33567',
      work: 'Plumber'
    },
    {
      id: 3,
      name: 'Hamna Darin',
      phoneNumber: '+91 99567 33567',
      work: 'Plumber'
    }
  ]);

  const [pendingMaintenances] = useState([
    {
      id: 1,
      name: 'Roger Lubin',
      amount: 5000,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=4',
      date: '2 days pending'
    },
    {
      id: 2,
      name: 'Roger Lubin',
      amount: 5000,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=5',
      date: '2 days pending'
    },
    {
      id: 3,
      name: 'Roger Lubin',
      amount: 5000,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=6',
      date: '2 days pending'
    }
  ]);

  const [upcomingActivities] = useState([
    {
      id: 1,
      title: 'Society Meeting',
      type: 'society',
      timeRange: '9:00 PM to 10:00 PM',
      date: '24-09-2024'
    },
    {
      id: 2,
      title: 'Holi Festival',
      type: 'holi',
      timeRange: '9:00 PM to 10:00 PM',
      date: '24-09-2024'
    },
    {
      id: 3,
      title: 'Ganesh Chaturthi',
      type: 'ganesh',
      timeRange: '9:00 PM to 10:00 PM',
      date: '24-09-2024'
    },
    {
      id: 4,
      title: 'Navratri Festival',
      type: 'navratri',
      timeRange: '9:00 PM to 10:00 PM',
      date: '24-09-2024'
    }
  ]);

  const [complaints] = useState([
    {
      id: 1,
      name: 'Evelyn Harper',
      complaintName: 'Unethical Behavior',
      date: '01/02/2024',
      priority: 'Medium' as const,
      status: 'Open' as const,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1'
    },
    {
      id: 2,
      name: 'Evelyn Harper',
      complaintName: 'Unethical Behavior',
      date: '01/02/2024',
      priority: 'Low' as const,
      status: 'Pending' as const,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=2'
    },
    {
      id: 3,
      name: 'Evelyn Harper',
      complaintName: 'Unethical Behavior',
      date: '01/02/2024',
      priority: 'High' as const,
      status: 'Solve' as const,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3'
    }
  ]);

  const handleAddNumber = (data: any) => {
    console.log('Adding number:', data);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar onLogout={onLogout} />
      {/* Rest of the Dashboard component remains the same */}
      {/* ... */}
    </div>
  );
}