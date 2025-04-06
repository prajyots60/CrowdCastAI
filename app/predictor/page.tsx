"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"
import { Brain, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { predictCampaignSuccess } from "@/lib/actions"
import { useToast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"

const categories = [
  "Transportation",
  "Health & Fitness",
  "Writing & Publishing",
  "Dance & Theater",
  "Environment",
  "Human Rights",
  "Art",
  "Video Games",
  "Photography",
  "Local Businesses",
  "Home",
  "Phones & Accessories",
  "Comics",
  "Camera Gear",
  "Music",
  "Fashion & Wearables",
  "Travel & Outdoors",
  "Productivity",
  "Food & Beverages",
  "Animal Rights",
  "Wellness",
  "Spirituality",
  "Audio",
  "Film",
  "Tabletop Games",
  "Energy & Green Tech",
  "Culture",
  "Podcasts, Blogs & Vlogs",
  "Education",
  "Web Series & TV Shows",
]

const productStages = ["unknown", "production", "shipping", "concept", "prototype"]
const projectTypes = ["campaign"]
const fundingGoals = ["Very Low", "Low", "Medium", "No Funds", "High", "Very High"]

const formSchema = z.object({
  category: z.string({
    required_error: "Please select a category.",
  }),
  productStage: z.string({
    required_error: "Please select a product stage.",
  }),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  durationDays: z.coerce.number().min(1, "Duration must be at least 1 day").max(90, "Duration cannot exceed 90 days"),
  launchMonth: z.coerce.number().min(1, "Month must be between 1 and 12").max(12, "Month must be between 1 and 12"),
  launchYear: z.coerce.number().min(2020, "Year must be 2020 or later").max(2030, "Year cannot exceed 2030"),
  fundingGoal: z.string({
    required_error: "Please select a funding goal.",
  }),
  isPromoted: z.boolean().default(false),
  isInDemand: z.boolean().default(false),
})

export default function PredictorPage() {
  const [prediction, setPrediction] = useState<{
    success: boolean
    probability: number
  } | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      productStage: "",
      projectType: "campaign",
      durationDays: 30,
      launchMonth: new Date().getMonth() + 1,
      launchYear: new Date().getFullYear(),
      fundingGoal: "Medium",
      isPromoted: false,
      isInDemand: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // In a real app, this would call the API with the .pkl model
      const result = await predictCampaignSuccess(values)
      setPrediction(result)
    } catch (error) {
      console.error("Prediction error:", error)
      toast({
        title: "Error",
        description: "Failed to generate prediction. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container py-10">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Campaign Success Predictor</h1>
          <p className="text-muted-foreground">Enter your campaign details to predict your chances of success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Campaign Details
                </CardTitle>
                <CardDescription>Fill in the details about your crowdfunding campaign</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {categories.map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="productStage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Product Stage</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select product stage" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {productStages.map((stage) => (
                                  <SelectItem key={stage} value={stage}>
                                    {stage.charAt(0).toUpperCase() + stage.slice(1)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select project type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {projectTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="durationDays"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Duration (days)</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormDescription>Campaign duration in days</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="launchMonth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Launch Month</FormLabel>
                            <FormControl>
                              <Input type="number" min={1} max={12} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="launchYear"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Launch Year</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fundingGoal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Funding Goal</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select funding goal" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {fundingGoals.map((goal) => (
                                  <SelectItem key={goal} value={goal}>
                                    {goal}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="isPromoted"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>Promoted Campaign</FormLabel>
                              <FormDescription>Is this campaign being promoted?</FormDescription>
                            </div>
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="accent-primary h-4 w-4"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="isInDemand"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                            <div className="space-y-0.5">
                              <FormLabel>InDemand Campaign</FormLabel>
                              <FormDescription>Is this an InDemand campaign?</FormDescription>
                            </div>
                            <FormControl>
                              <input
                                type="checkbox"
                                checked={field.value}
                                onChange={field.onChange}
                                className="accent-primary h-4 w-4"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Predicting...
                        </>
                      ) : (
                        "Predict Success"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Prediction Result</CardTitle>
                <CardDescription>Your campaign success prediction</CardDescription>
              </CardHeader>
              <CardContent>
                {prediction ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="text-center">
                      <div
                        className={`text-2xl font-bold ${
                          prediction.success ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"
                        }`}
                      >
                        {prediction.success ? "Success Likely" : "Success Unlikely"}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Based on our ML model analysis</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Success Probability</span>
                        <span className="font-medium">{prediction.probability.toFixed(1)}%</span>
                      </div>
                      <Progress
                        value={prediction.probability}
                        className={`h-2 ${
                          prediction.probability > 70
                            ? "bg-green-100 dark:bg-green-900"
                            : prediction.probability > 40
                              ? "bg-yellow-100 dark:bg-yellow-900"
                              : "bg-red-100 dark:bg-red-900"
                        }`}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-medium mb-2">Key Factors</h4>
                      <ul className="text-sm space-y-1">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {prediction.probability > 70 ? "Strong category performance" : "Category may be challenging"}
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {form.getValues("productStage") === "shipping"
                            ? "Product ready to ship (positive)"
                            : "Early product stage (consider risks)"}
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {form.getValues("durationDays") > 45
                            ? "Campaign duration may be too long"
                            : "Optimal campaign duration"}
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[300px] text-center text-muted-foreground">
                    <Brain className="h-12 w-12 mb-4 opacity-20" />
                    <p>Fill out the form and click "Predict Success" to see your campaign prediction</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

