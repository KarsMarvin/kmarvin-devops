const router = require("express").Router();
const { check, validateResult }  = require("express-validator");
const CalcService = require('../../service/CalcService');

router.post(
      '/',
      [
          check("operation", "operation is required").exists().not().isEmpty(),
          check("operand1", "operand1 is required").exists().not().isEmpty(),
          check("operand2", "operand2 is required").exists().not().isEmpty(),
      ],
      async (req, res) => {
     const errors = validateResult(req);
     if(!errors.isEmpty()) return res.status(400).json({ error: errors.array() });   

     const { operation, operand1, operand2 } = req.body;
     try {

      const result = CalcService.doMath(operand1, operand2, operation);
      return res.status(200).json({ calcResponse: result });
     } catch(e) {
       return res.status(500).json({ error: e });
     }
});

module.exports = router;