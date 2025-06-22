public class FinancialForecasting {

    
    public static double forecastValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return forecastValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double initialValue = 1000.0; // Starting amount
        double growthRate = 0.10;     // 10% annual growth
        int years = 5;

        double futureValue = forecastValue(initialValue, growthRate, years);
        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }
}

// T.C - O(N)
