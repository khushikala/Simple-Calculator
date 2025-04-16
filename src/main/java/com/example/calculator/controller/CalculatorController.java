package com.example.calculator.controller;

import com.example.calculator.model.OperationRequest;
import com.example.calculator.model.OperationResponse;
import com.example.calculator.exception.CalculatorException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calc")
public class CalculatorController {

    @PostMapping("/add")
    public OperationResponse add(@RequestBody OperationRequest request) {
        return new OperationResponse(request.getA() + request.getB());
    }

    @PostMapping("/subtract")
    public OperationResponse subtract(@RequestBody OperationRequest request) {
        return new OperationResponse(request.getA() - request.getB());
    }

    @PostMapping("/multiply")
    public OperationResponse multiply(@RequestBody OperationRequest request) {
        return new OperationResponse(request.getA() * request.getB());
    }

    @PostMapping("/divide")
    public OperationResponse divide(@RequestBody OperationRequest request) {
        if (request.getB() == 0) {
            throw new CalculatorException("Cannot divide by zero");
        }
        return new OperationResponse(request.getA() / request.getB());
    }

}
