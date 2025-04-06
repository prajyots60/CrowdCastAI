import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, PiggyBank, LineChart, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Smart Predictions for{" "}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Smarter Campaigns
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Predict the success of your crowdfunding campaigns before launch with machine learning-powered insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/predictor">
                  Predict Campaign Success <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/learn">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Data-driven insights to optimize your crowdfunding campaigns
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Campaign Success Predictor</CardTitle>
                  <CardDescription>Get a prediction on whether your campaign is likely to succeed</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enter campaign details like category, product stage, and funding goal to get instant predictions
                    based on ML models trained on real crowdfunding data.
                  </p>
                  <Button asChild variant="link" className="p-0 mt-4">
                    <Link href="/predictor">
                      Try Predictor <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <PiggyBank className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Funding Goal Estimator</CardTitle>
                  <CardDescription>Estimate the likely funding amount your campaign might receive</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Set realistic goals based on category, promotion status, and duration with our AI-powered funding
                    estimator.
                  </p>
                  <Button asChild variant="link" className="p-0 mt-4">
                    <Link href="/estimator">
                      Try Estimator <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="transition-all hover:shadow-lg">
                <CardHeader>
                  <LineChart className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Insights Dashboard</CardTitle>
                  <CardDescription>Visual data on trends and feature importance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore best months to launch, successful categories, and feature importance to make informed
                    decisions for your campaign.
                  </p>
                  <Button asChild variant="link" className="p-0 mt-4">
                    <Link href="/insights">
                      View Insights <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

