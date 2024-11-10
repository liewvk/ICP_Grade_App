// src/gapp_backend/main.mo
actor {
    public func getGrade(mark: Int) : async Text {
        if (mark < 0 or mark > 100) {
            return "Invalid";
        } else if (mark < 30) {
            return "F";
        } else if (mark < 40) {
            return "E";
        } else if (mark < 50) {
            return "D";
        } else if (mark < 60) {
            return "C";
        } else if (mark <= 80) {
            return "B";
        } else {
            return "A";
        }
    };
};




