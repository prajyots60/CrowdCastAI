"use client"

import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

interface BarChartProps {
  data: any[]
  xKey: string
  yKey: string
  yLabel?: string
}

export function BarChart({ data, xKey, yKey, yLabel }: BarChartProps) {
  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe", "#eff6ff"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 60,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey={xKey} angle={-45} textAnchor="end" tick={{ fontSize: 12 }} height={60} />
        <YAxis
          label={{
            value: yLabel,
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle" },
          }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Bar dataKey={yKey} fill="#3b82f6">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

interface LineChartProps {
  data: any[]
  xKey: string
  yKey: string
  yLabel?: string
}

export function LineChart({ data, xKey, yKey, yLabel }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
        <YAxis
          label={{
            value: yLabel,
            angle: -90,
            position: "insideLeft",
            style: { textAnchor: "middle" },
          }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Line type="monotone" dataKey={yKey} stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

interface PieChartProps {
  data: {
    name: string
    value: number
  }[]
}

export function PieChart({ data }: PieChartProps) {
  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe", "#dbeafe", "#eff6ff"]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </RechartsPieChart>
    </ResponsiveContainer>
  )
}

