import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert that 2 + 3 equals 5
        assertEquals(5, 2 + 3);

        // Assert that 5 is greater than 3
        assertTrue(5 > 3);

        // Assert that 5 is NOT less than 3
        assertFalse(5 < 3);

        // Assert that the object is null
        Object obj1 = null;
        assertNull(obj1);

        // Assert that the object is NOT null
        Object obj2 = new Object();
        assertNotNull(obj2);
    }
}
