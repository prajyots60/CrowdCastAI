import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Calendar, DollarSign, Target, Users, Video } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function LearnPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Learn About Crowdfunding</h1>
          <p className="text-muted-foreground">Tips, guides, and best practices for successful campaigns</p>
        </div>

        <Tabs defaultValue="guides" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  When to Launch Your Campaign
                </CardTitle>
                <CardDescription>Timing is everything in crowdfunding</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The timing of your campaign launch can significantly impact your success. Based on our data analysis,
                  here are the optimal times to launch:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Best Months</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>April-May (Spring campaigns)</li>
                      <li>September-October (Fall campaigns)</li>
                      <li>Avoid December (holiday competition)</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Best Days</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Tuesday and Wednesday (highest engagement)</li>
                      <li>Early morning (9-11 AM) in your target timezone</li>
                      <li>Avoid Friday afternoons and weekends</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Remember that the first 48 hours are critical. Campaigns that reach 30% of their goal in the first 48
                  hours have a 90% chance of success. Plan your initial outreach accordingly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Setting Realistic Goals
                </CardTitle>
                <CardDescription>How to determine the right funding target</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Setting the right funding goal is a delicate balance. Too high, and you risk not reaching your goal;
                  too low, and you might not have enough funds to deliver your project.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Goal Calculation</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Production costs (materials, manufacturing)</li>
                      <li>Fulfillment costs (shipping, packaging)</li>
                      <li>Platform fees (8-10% of total raised)</li>
                      <li>Marketing budget (5-10% of goal)</li>
                      <li>Buffer for unexpected costs (10-15%)</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Goal Optimization</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Medium-range goals have highest success rates</li>
                      <li>Consider a tiered approach with stretch goals</li>
                      <li>Be transparent about how funds will be used</li>
                      <li>Use our Funding Estimator for data-driven targets</li>
                    </ul>
                  </div>
                </div>
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Pro Tip</AlertTitle>
                  <AlertDescription>
                    Campaigns with goals in the "Medium" range have 1.8x higher success rates than those with "High"
                    goals. Use our{" "}
                    <Link href="/estimator" className="font-medium underline">
                      Funding Estimator
                    </Link>{" "}
                    to find the optimal goal for your campaign.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Building Your Audience
                </CardTitle>
                <CardDescription>Strategies for community building before launch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  A strong pre-launch audience is one of the most reliable predictors of crowdfunding success. Here's
                  how to build your audience before launching:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Pre-Launch Timeline</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>3-6 months before: Start content creation</li>
                      <li>2-3 months before: Build email list</li>
                      <li>1 month before: Tease campaign details</li>
                      <li>2 weeks before: Daily engagement</li>
                      <li>Launch day: Activate your entire network</li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Audience Building Channels</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Email list (highest conversion rate)</li>
                      <li>Social media communities</li>
                      <li>Relevant online forums</li>
                      <li>Industry events and meetups</li>
                      <li>Partnerships with influencers</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our data shows that campaigns with at least 100 email subscribers before launch have a 63% higher
                  success rate than those starting from zero.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faqs" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions about crowdfunding campaigns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">What's the difference between Kickstarter and Indiegogo?</h3>
                    <p className="text-sm text-muted-foreground">
                      Kickstarter uses an all-or-nothing funding model where you only receive funds if you meet your
                      goal. Indiegogo offers both all-or-nothing and flexible funding, where you keep what you raise
                      regardless of meeting your goal. Kickstarter has higher traffic but stricter requirements, while
                      Indiegogo offers more flexibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">How long should my campaign run?</h3>
                    <p className="text-sm text-muted-foreground">
                      Our data shows that 30-35 days is the optimal campaign duration with a 64% success rate. Campaigns
                      longer than 60 days have only a 38% success rate as they lose momentum and urgency. Keep your
                      campaign focused and time-bound for best results.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">How important is the campaign video?</h3>
                    <p className="text-sm text-muted-foreground">
                      Extremely important. Campaigns with high-quality videos raise 105% more than those without. Your
                      video should be 2-3 minutes long, clearly explain your product/project, show your team, and
                      include a strong call to action. Invest in good lighting and audio quality.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">What percentage of campaigns succeed?</h3>
                    <p className="text-sm text-muted-foreground">
                      Overall, about 37% of crowdfunding campaigns reach their funding goals. However, this varies
                      widely by category: Technology (28%), Design (36%), Games (55%), Comics (65%), and Music (50%).
                      Using our prediction tools can significantly improve your chances of success.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">How much should I budget for marketing?</h3>
                    <p className="text-sm text-muted-foreground">
                      Successful campaigns typically allocate 5-10% of their funding goal to marketing efforts. This
                      includes paid advertising, PR outreach, content creation, and potentially hiring a marketing
                      agency. Campaigns that invest in promotion are 2.3x more likely to succeed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">What are stretch goals and when should I use them?</h3>
                    <p className="text-sm text-muted-foreground">
                      Stretch goals are additional funding targets beyond your initial goal that unlock new features or
                      rewards. Only announce stretch goals after reaching your initial funding target. Plan them in
                      advance, make them exciting but achievable, and ensure they add value without compromising your
                      ability to deliver.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="mt-6 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Helpful Resources</CardTitle>
                <CardDescription>Tools and guides to help you succeed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Video className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Video Tutorial Series</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Step-by-step video guides on creating successful crowdfunding campaigns
                    </p>
                    <Button variant="outline" className="w-full">
                      Watch Videos
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Budget Calculator</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Interactive tool to calculate your campaign budget and funding goal
                    </p>
                    <Button variant="outline" className="w-full">
                      Use Calculator
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Campaign Timeline Template</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Downloadable template to plan your pre-launch, launch, and post-campaign activities
                    </p>
                    <Button variant="outline" className="w-full">
                      Download Template
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">Marketing Checklist</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive checklist for marketing your crowdfunding campaign
                    </p>
                    <Button variant="outline" className="w-full">
                      Get Checklist
                    </Button>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Recommended Reading</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <a href="#" className="text-sm hover:underline">
                        The Crowdfunding Bible: How to Raise Money for Any Startup
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <a href="#" className="text-sm hover:underline">
                        Kickstarter Launch Formula: The Crowdfunding Handbook for Startups
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <a href="#" className="text-sm hover:underline">
                        The Indiegogo Crowdfunding Guide: How to Raise Money for Your Project
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <a href="#" className="text-sm hover:underline">
                        Crowdfunding Intelligence: The No-Nonsense Guide to Raising Investment
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

