  "use client"

  import { useState } from "react"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { useForm } from "react-hook-form"
  import * as z from "zod"
  import { motion } from "framer-motion"
  import { PiggyBank, Loader2, DollarSign } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  import { Input } from "@/components/ui/input"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  import { estimateFunding } from "@/lib/actions"
  import { useToast } from "@/components/ui/use-toast"

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
  

  const formSchema = z.object({
    category: z.string({
      required_error: "Please select a category.",
    }),
    durationDays: z.coerce.number().min(1, "Duration must be at least 1 day").max(90, "Duration cannot exceed 90 days"),
    launchMonth: z.coerce.number().min(1, "Month must be between 1 and 12").max(12, "Month must be between 1 and 12"),
    isPromoted: z.boolean().default(false),
    isInDemand: z.boolean().default(false),
  })

  export default function EstimatorPage() {
    const [estimation, setEstimation] = useState<{
      amount: number
    } | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        category: "",
        durationDays: 30,
        launchMonth: new Date().getMonth() + 1,
        isPromoted: false,
        isInDemand: false,
      },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
      setIsLoading(true)
      try {
        // In a real app, this would call the API with the .pkl model
        const result = await estimateFunding(values)
        setEstimation(result)
      } catch (error) {
        console.error("Estimation error:", error)
        toast({
          title: "Error",
          description: "Failed to generate funding estimation. Please try again.",
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
            <h1 className="text-3xl font-bold mb-2">Funding Goal Estimator</h1>
            <p className="text-muted-foreground">Estimate how much funding your campaign might receive</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PiggyBank className="h-5 w-5" />
                    Campaign Details
                  </CardTitle>
                  <CardDescription>Fill in the details to estimate your potential funding</CardDescription>
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
                            Estimating...
                          </>
                        ) : (
                          "Estimate Funding"
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
                  <CardTitle>Funding Estimation</CardTitle>
                  <CardDescription>Your estimated funding amount</CardDescription>
                </CardHeader>
                <CardContent>
                  {estimation ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-4"
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">${estimation.amount.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground mt-1">Estimated funding amount</p>
                      </div>

                      <div className="pt-4 border-t">
                        <h4 className="font-medium mb-2">Funding Insights</h4>
                        <ul className="text-sm space-y-1">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            {estimation.amount > 10000 ? "High potential category" : "Consider optimizing your category"}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            {form.getValues("isPromoted")
                              ? "Promotion increases funding potential"
                              : "Consider promoting your campaign"}
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            {form.getValues("durationDays") < 45
                              ? "Optimal campaign duration"
                              : "Consider shortening your campaign"}
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[300px] text-center text-muted-foreground">
                      <DollarSign className="h-12 w-12 mb-4 opacity-20" />
                      <p>Fill out the form and click "Estimate Funding" to see your funding estimation</p>
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

