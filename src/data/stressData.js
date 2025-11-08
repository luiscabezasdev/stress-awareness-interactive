import { Heart, Brain, Activity, Moon, Shield, Zap, AlertCircle, Frown, BedDouble, Utensils, Focus } from 'lucide-react';

export const dangers = [
  { 
    id: 1, 
    icon: Heart, 
    text: "Heart disease and high blood pressure",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    explanation: "Chronic stress increases cortisol levels, which can lead to inflammation and plaque buildup in arteries, significantly raising the risk of cardiovascular disease."
  },
  { 
    id: 2, 
    icon: Brain, 
    text: "Anxiety and depression",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    explanation: "Prolonged stress affects brain chemistry, particularly neurotransmitters like serotonin and dopamine, which can trigger or worsen mental health conditions."
  },
  { 
    id: 3, 
    icon: Activity, 
    text: "Digestive problems",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
    explanation: "Stress disrupts the gut-brain connection, leading to issues like IBS, acid reflux, and changes in gut bacteria that affect overall digestive health."
  },
  { 
    id: 4, 
    icon: Moon, 
    text: "Sleep problems and insomnia",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-300",
    explanation: "Elevated stress hormones keep the body in a state of alertness, making it difficult to fall asleep and disrupting the natural sleep-wake cycle."
  },
  { 
    id: 5, 
    icon: Shield, 
    text: "Weakened immune system",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-300",
    explanation: "Chronic stress suppresses immune function by reducing white blood cell production, making the body more vulnerable to infections and illnesses."
  },
  { 
    id: 6, 
    icon: Zap, 
    text: "Memory and concentration problems",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-300",
    explanation: "High cortisol levels can damage the hippocampus, the brain region responsible for memory formation and retrieval, impacting cognitive function."
  }
];

export const manifestations = [
  { 
    id: 7, 
    icon: AlertCircle, 
    text: "Headaches and muscle tension",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-300",
    explanation: "Stress causes muscles to tense up as a protective mechanism, leading to tension headaches, neck pain, and chronic muscle tightness."
  },
  { 
    id: 8, 
    icon: Frown, 
    text: "Irritability and anger",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-300",
    explanation: "When overwhelmed, the brain's emotional regulation becomes impaired, causing quick temper, frustration, and difficulty controlling emotional responses."
  },
  { 
    id: 9, 
    icon: Brain, 
    text: "Feeling anxious or overwhelmed",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    explanation: "The constant activation of the stress response system creates feelings of nervousness, worry, and being unable to cope with daily demands."
  },
  { 
    id: 10, 
    icon: BedDouble, 
    text: "Trouble sleeping or waking up tired",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-300",
    explanation: "Racing thoughts and physical tension prevent deep, restorative sleep, resulting in fatigue even after a full night's rest."
  },
  { 
    id: 11, 
    icon: Utensils, 
    text: "Changes in appetite",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-300",
    explanation: "Stress hormones affect hunger signals and emotional eating patterns, causing either loss of appetite or comfort eating and cravings."
  },
  { 
    id: 12, 
    icon: Focus, 
    text: "Difficulty concentrating and making decisions",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    explanation: "Stress overloads the brain's working memory and prefrontal cortex, making it harder to focus, think clearly, and make sound decisions."
  }
];