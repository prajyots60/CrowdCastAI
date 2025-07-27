"use server";

// Backend API URL
const BACKEND_URL = "http://localhost:5000";

interface PredictorFormData {
  category: string;
  productStage: string;
  projectType: string;
  durationDays: number;
  launchMonth: number;
  launchYear: number;
  fundingGoal: string;
  isPromoted: boolean;
  isInDemand: boolean;
}

interface EstimatorFormData {
  category: string;
  durationDays: number;
  launchMonth: number;
  isPromoted: boolean;
  isInDemand: boolean;
}

export async function predictCampaignSuccess(
  data: PredictorFormData
): Promise<{ success: boolean; probability: number }> {
  try {
    // Prepare data for the backend API
    const requestData = {
      category: data.category,
      product_stage: data.productStage,
      project_type: data.projectType,
      duration_days: data.durationDays,
      launch_month: data.launchMonth,
      launch_year: data.launchYear,
      goal: data.fundingGoal,
      is_promoted: data.isPromoted,
      is_indemand: data.isInDemand,
    };

    const response = await fetch(`${BACKEND_URL}/predict/success`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: result.prediction === 1,
      probability: Math.round(result.probabilities[1] * 100), // Convert to percentage
    };
  } catch (error) {
    console.error("Error calling prediction API:", error);
    // Fallback to mock data if API fails
    return {
      success: Math.random() > 0.5,
      probability: Math.round(Math.random() * 100),
    };
  }
}

export async function estimateFunding(
  data: EstimatorFormData
): Promise<{ amount: number }> {
  try {
    const requestData = {
      category: data.category,
      duration_days: data.durationDays,
      launch_month: data.launchMonth,
      is_promoted: data.isPromoted,
      is_indemand: data.isInDemand,
    };

    const response = await fetch(`${BACKEND_URL}/predict/funding`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      amount: result.prediction,
    };
  } catch (error) {
    console.error("Error calling funding estimation API:", error);
    // Fallback to mock data if API fails
    let baseAmount = 5000;
    if (data.isPromoted) baseAmount *= 1.5;
    if (data.isInDemand) baseAmount *= 1.3;
    return {
      amount: Math.round(baseAmount * (Math.random() * 0.4 + 0.8)),
    };
  }
}

export async function getInsightsData() {
  // For this demo, we'll return mock data

  await new Promise((resolve) => setTimeout(resolve, 1500));

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
  };
}
