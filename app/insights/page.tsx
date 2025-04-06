"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart, PieChart } from "@/components/charts"
import { Loader2 } from "lucide-react"
import { getInsightsData } from "@/lib/actions"

interface InsightsData {
  categorySuccess: {
    category: string
    successRate: number
  }[]
  monthlySuccess: {
    month: string
    successRate: number
  }[]
  featureImportance: {
    feature: string
    importance: number
  }[]
  fundingByCategory: {
    category: string
    avgFunding: number
  }[]
}

export default function InsightsPage() {
  const [data, setData] = useState<InsightsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real app, this would fetch data from an API
        const insightsData = await getInsightsData()
        setData(insightsData)
      } catch (error) {
        console.error("Failed to fetch insights data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading insights data...</p>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="container py-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Failed to load insights</h1>
          <p className="text-muted-foreground mt-2">Please try again later</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Crowdfunding Insights</h1>
          <p className="text-muted-foreground">Data-driven insights to help you make informed decisions</p>
        </div>

        <Tabs defaultValue="success" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="success">Success Factors</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="timing">Timing</TabsTrigger>
            <TabsTrigger value="features">Feature Importance</TabsTrigger>
          </TabsList>

          <TabsContent value="success" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Categories</CardTitle>
                  <CardDescription>Categories with the highest success rates</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <BarChart
                    data={data.categorySuccess.slice(0, 5)}
                    xKey="category"
                    yKey="successRate"
                    yLabel="Success Rate (%)"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Success by Month</CardTitle>
                  <CardDescription>Campaign success rates by launch month</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <LineChart data={data.monthlySuccess} xKey="month" yKey="successRate" yLabel="Success Rate (%)" />
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Key Success Insights</CardTitle>
                  <CardDescription>Important factors that influence campaign success</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Optimal Duration</h3>
                      <p className="text-sm text-muted-foreground">
                        Campaigns lasting 30-35 days have the highest success rate at 64%. Longer campaigns often lose
                        momentum and shorter ones may not reach enough backers.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Product Stage</h3>
                      <p className="text-sm text-muted-foreground">
                        Shipping-ready products have a 72% success rate compared to 41% for concept-stage products.
                        Backers prefer lower-risk investments.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Promotion Impact</h3>
                      <p className="text-sm text-muted-foreground">
                        Promoted campaigns are 2.3x more likely to succeed and raise 3.1x more funding on average.
                        Consider allocating budget for promotion.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="categories" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Category Success Distribution</CardTitle>
                  <CardDescription>Success rates across different categories</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <PieChart
                    data={data.categorySuccess.slice(0, 6).map((item) => ({
                      name: item.category,
                      value: item.successRate,
                    }))}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Average Funding by Category</CardTitle>
                  <CardDescription>Average funding amounts across top categories</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <BarChart
                    data={data.fundingByCategory.slice(0, 5)}
                    xKey="category"
                    yKey="avgFunding"
                    yLabel="Avg. Funding ($)"
                  />
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Category Insights</CardTitle>
                  <CardDescription>Detailed analysis of category performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Emerging Categories</h3>
                      <p className="text-sm text-muted-foreground">
                        Energy & Green Tech, Wellness, and Audio categories have shown the fastest growth in the past
                        year, with success rates improving by 18-24%.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Competitive Categories</h3>
                      <p className="text-sm text-muted-foreground">
                        Video Games, Technology, and Fashion have the highest competition with 3x more campaigns than
                        average, requiring stronger differentiation.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Funding Potential</h3>
                      <p className="text-sm text-muted-foreground">
                        Technology, Design, and Games categories have the highest average funding amounts, but also
                        require more sophisticated campaigns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timing" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Success Trends</CardTitle>
                  <CardDescription>Success rates throughout the year</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <LineChart data={data.monthlySuccess} xKey="month" yKey="successRate" yLabel="Success Rate (%)" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Duration Impact</CardTitle>
                  <CardDescription>How campaign duration affects success</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-500">64%</div>
                        <div className="text-xs text-muted-foreground">30-35 days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-yellow-500">52%</div>
                        <div className="text-xs text-muted-foreground">40-45 days</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-red-500">38%</div>
                        <div className="text-xs text-muted-foreground">60+ days</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Shorter campaigns (30-35 days) have significantly higher success rates than longer campaigns.
                      Campaigns over 60 days show the lowest success rates.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Timing Insights</CardTitle>
                  <CardDescription>Strategic timing considerations for your campaign</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Seasonal Trends</h3>
                      <p className="text-sm text-muted-foreground">
                        Spring (April-May) and fall (September-October) show the highest success rates. December has the
                        lowest success rate due to holiday competition.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Day of Week</h3>
                      <p className="text-sm text-muted-foreground">
                        Campaigns launched on Tuesday and Wednesday have 12% higher success rates than those launched on
                        weekends. Avoid launching on Friday afternoons.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">First 48 Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Campaigns that reach 30% of their goal in the first 48 hours have a 90% chance of success.
                        Prepare your initial backers before launch.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Importance</CardTitle>
                  <CardDescription>Factors that most influence campaign success</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px]">
                  <BarChart data={data.featureImportance} xKey="feature" yKey="importance" yLabel="Importance Score" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Feature Correlation</CardTitle>
                  <CardDescription>How features correlate with funding amount</CardDescription>
                </CardHeader>
                <CardContent className="h-[350px] flex items-center justify-center">
                  <div className="w-full">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Product Stage (Shipping)</span>
                          <span className="text-sm font-medium">+0.72</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Is Promoted</span>
                          <span className="text-sm font-medium">+0.68</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Category (Technology)</span>
                          <span className="text-sm font-medium">+0.54</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "54%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">Duration (60+ days)</span>
                          <span className="text-sm font-medium">-0.32</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{ width: "32%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Feature Analysis</CardTitle>
                  <CardDescription>How to optimize your campaign based on feature importance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Product Readiness</h3>
                      <p className="text-sm text-muted-foreground">
                        The product stage is the most important factor. Shipping-ready products have a 72% success rate,
                        while concept-stage products only have a 41% success rate.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Promotion Strategy</h3>
                      <p className="text-sm text-muted-foreground">
                        Promoted campaigns are 2.3x more likely to succeed. Consider allocating 5-10% of your funding
                        goal to marketing and promotion efforts.
                      </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <h3 className="font-medium mb-2">Goal Setting</h3>
                      <p className="text-sm text-muted-foreground">
                        Setting a realistic funding goal is critical. Campaigns with goals in the "Medium" range have
                        1.8x higher success rates than those with "High" goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

