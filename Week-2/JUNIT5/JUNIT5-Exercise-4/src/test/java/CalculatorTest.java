import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Setup: This runs before each test
        calculator = new Calculator();
        System.out.println("Setting up Calculator instance...");
    }

    @After
    public void tearDown() {
        // Teardown: This runs after each test
        calculator = null;
        System.out.println("Tearing down Calculator instance...");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 5, b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtract() {
        // Arrange
        int a = 10, b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
