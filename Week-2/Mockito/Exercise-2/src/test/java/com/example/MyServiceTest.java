package com.example;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Response");

        MyService service = new MyService(mockApi);

        // Act
        service.fetchData();

        // Assert interaction
        verify(mockApi).getData();  // ✅ Verifies it was called once
    }
}
