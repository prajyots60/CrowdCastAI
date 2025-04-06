import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Database, Github, LineChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">About CrowdCast AI</h1>
          <p className="text-muted-foreground">Smart predictions for smarter crowdfunding campaigns</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Project Overview
              </CardTitle>
              <CardDescription>What is CrowdCast AI and how does it work?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                CrowdCast AI is a machine learning-powered web platform designed to help creators, entrepreneurs, and
                innovators predict the success of their crowdfunding campaigns before launch. By analyzing historical
                data from Kickstarter and Indiegogo, our platform provides data-driven insights to help users optimize
                their campaigns for better fundraising results.
              </p>
              <p>
                Whether you're unsure about your funding goal, launch timing, or campaign duration, CrowdCast AI offers
                instant predictions and recommendations — without requiring any technical knowledge.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <Brain className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Prediction Models</h3>
                  <p className="text-sm text-muted-foreground mt-1">ML models trained on real crowdfunding data</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <LineChart className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Data Analysis</h3>
                  <p className="text-sm text-muted-foreground mt-1">Insights from thousands of campaigns</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                  <Database className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-medium">Feature Engineering</h3>
                  <p className="text-sm text-muted-foreground mt-1">Identifying key success factors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Technology Stack
              </CardTitle>
              <CardDescription>Tools and technologies used to build CrowdCast AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Frontend</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">Next.js (React framework)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">TailwindCSS for styling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">shadcn/ui component library</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">Framer Motion for animations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">Recharts for data visualization</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Machine Learning</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">Python for model development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">scikit-learn for ML algorithms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">pandas for data processing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">pickle for model serialization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span className="text-sm">Next.js API routes for model integration</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Integration Architecture</h3>
                <p className="text-sm text-muted-foreground">
                  CrowdCast AI uses a serverless architecture where machine learning models are loaded directly in
                  Next.js API routes. The .pkl model files are imported and used to make predictions based on user
                  input. This approach eliminates the need for a separate backend service while maintaining fast
                  response times.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Dataset Information
              </CardTitle>
              <CardDescription>About the data used to train our models</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Our machine learning models are trained on a comprehensive dataset of over 100,000 crowdfunding
                campaigns from Kickstarter and Indiegogo spanning from 2015 to 2023. The dataset includes campaigns
                across 30 different categories and contains detailed information about each campaign's performance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Data Features</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Campaign category and subcategory</li>
                    <li>Funding goal and amount raised</li>
                    <li>Campaign duration and timing</li>
                    <li>Product development stage</li>
                    <li>Promotion status and strategy</li>
                    <li>Backer count and demographics</li>
                    <li>Campaign page metrics</li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Data Processing</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Extensive cleaning and normalization</li>
                    <li>Feature engineering and selection</li>
                    <li>Handling of missing values</li>
                    <li>Outlier detection and treatment</li>
                    <li>Cross-validation for model accuracy</li>
                    <li>Regular updates with new campaign data</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Our models achieve 78% accuracy in predicting campaign success and can estimate funding amounts with a
                mean absolute error of less than 15%. We continuously improve our models with new data and refinements
                to the algorithms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5 text-primary" />
                Project Links
              </CardTitle>
              <CardDescription>Resources and related links</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="https://github.com/username/crowdcast-ai" target="_blank" rel="noopener noreferrer">
                  <div className="border rounded-lg p-4 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Github className="h-5 w-5" />
                      <h3 className="font-medium">GitHub Repository</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">View the source code and contribute to the project</p>
                  </div>
                </Link>
                <Link href="/learn" target="_blank" rel="noopener noreferrer">
                  <div className="border rounded-lg p-4 hover:bg-muted transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-5 w-5" />
                      <h3 className="font-medium">Learning Resources</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Explore our guides and tutorials on crowdfunding</p>
                  </div>
                </Link>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions or feedback? We'd love to hear from you!
                </p>
                <Button>Contact Us</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

