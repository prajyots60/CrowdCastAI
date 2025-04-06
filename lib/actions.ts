"use server"

// In a real application, this would use the actual .pkl models
// For this demo, we'll simulate the model predictions

interface PredictorFormData {
  category: string
  productStage: string
  projectType: string
  durationDays: number
  launchMonth: number
  launchYear: number
  fundingGoal: string
  isPromoted: boolean
  isInDemand: boolean
}

interface EstimatorFormData {
  category: string
  durationDays: number
  launchMonth: number
  isPromoted: boolean
  isInDemand: boolean
}

export async function predictCampaignSuccess(
  data: PredictorFormData,
): Promise<{ success: boolean; probability: number }> {
  // Simulate model prediction with some logic based on the input data
  // In a real app, this would load and use the .pkl model

  // Add a small delay to simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  let baseScore = 50 // Start with a neutral 50% probability

  // Adjust based on product stage
  if (data.productStage === "shipping") baseScore += 20
  else if (data.productStage === "production") baseScore += 15
  else if (data.productStage === "prototype") baseScore += 5
  else if (data.productStage === "concept") baseScore -= 10

  // Adjust based on duration
  if (data.durationDays >= 25 && data.durationDays <= 35) baseScore += 10
  else if (data.durationDays > 45) baseScore -= 15

  // Adjust based on category
  const highSuccessCategories = ["Comics", "Tabletop Games", "Music", "Art"]
  const lowSuccessCategories = ["Technology", "Fashion & Wearables", "Food & Beverages"]

  if (highSuccessCategories.includes(data.category)) baseScore += 15
  if (lowSuccessCategories.includes(data.category)) baseScore -= 10

  // Adjust based on promotion
  if (data.isPromoted) baseScore += 15

  // Adjust based on funding goal
  if (data.fundingGoal === "Very High") baseScore -= 20
  else if (data.fundingGoal === "High") baseScore -= 10
  else if (data.fundingGoal === "Medium") baseScore += 5
  else if (data.fundingGoal === "Low") baseScore += 10

  // Add some randomness
  const randomFactor = Math.floor(Math.random() * 10) - 5
  baseScore += randomFactor

  // Ensure the score is between 0 and 100
  const finalScore = Math.max(0, Math.min(100, baseScore))

  return {
    success: finalScore > 50,
    probability: finalScore,
  }
}

export async function estimateFunding(data: EstimatorFormData): Promise<{ amount: number }> {
  // Simulate model prediction with some logic based on the input data
  // In a real app, this would load and use the .pkl model

  // Add a small delay to simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  let baseAmount = 5000 // Start with a base amount

  // Adjust based on category
  const highFundingCategories = ["Technology", "Video Games", "Design"]
  const mediumFundingCategories = ["Comics", "Music", "Film"]
  const lowFundingCategories = ["Writing & Publishing", "Dance & Theater"]

  if (highFundingCategories.includes(data.category)) baseAmount *= 3
  else if (mediumFundingCategories.includes(data.category)) baseAmount *= 1.5
  else if (lowFundingCategories.includes(data.category)) baseAmount *= 0.7

  // Adjust based on duration
  if (data.durationDays >= 25 && data.durationDays <= 35) baseAmount *= 1.2
  else if (data.durationDays > 45) baseAmount *= 0.8

  // Adjust based on promotion
  if (data.isPromoted) baseAmount *= 1.5

  // Adjust based on inDemand
  if (data.isInDemand) baseAmount *= 1.3

  // Add some randomness
  const randomFactor = Math.random() * 0.4 + 0.8 // Between 0.8 and 1.2
  baseAmount *= randomFactor

  // Round to nearest dollar
  const finalAmount = Math.round(baseAmount)

  return {
    amount: finalAmount,
  }
}

export async function getInsightsData() {
  // In a real app, this would fetch data from an API or database
  // For this demo, we'll return mock data

  // Add a small delay to simulate loading time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return {
    categorySuccess: [
      { category: "Comics", successRate: 65 },
      { category: "Tabletop Games", successRate: 55 },
      { category: "Music", successRate: 50 },
      { category: "Art", successRate: 48 },
      { category: "Film", successRate: 43 },
      { category: "Technology", successRate: 28 },
    ],
    monthlySuccess: [
      { month: "Jan", successRate: 35 },
      { month: "Feb", successRate: 38 },
      { month: "Mar", successRate: 42 },
      { month: "Apr", successRate: 58 },
      { month: "May", successRate: 62 },
      { month: "Jun", successRate: 48 },
      { month: "Jul", successRate: 45 },
      { month: "Aug", successRate: 47 },
      { month: "Sep", successRate: 59 },
      { month: "Oct", successRate: 55 },
      { month: "Nov", successRate: 42 },
      { month: "Dec", successRate: 32 },
    ],
    featureImportance: [
      { feature: "Product Stage", importance: 0.28 },
      { feature: "Is Promoted", importance: 0.22 },
      { feature: "Category", importance: 0.18 },
      { feature: "Duration", importance: 0.15 },
      { feature: "Launch Month", importance: 0.1 },
      { feature: "Funding Goal", importance: 0.07 },
    ],
    fundingByCategory: [
      { category: "Technology", avgFunding: 25000 },
      { category: "Games", avgFunding: 18500 },
      { category: "Design", avgFunding: 15000 },
      { category: "Film", avgFunding: 12000 },
      { category: "Music", avgFunding: 8500 },
    ],
  }
}

