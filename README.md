# MarketLens

MarketLens is a premium enterprise SaaS platform built for modern manufacturing, providing edge-first computer vision for predictive maintenance and quality control.

## Overview
By leveraging existing camera infrastructure, MarketLens deploys lightweight agents on local IPCs (edge nodes) to process frames in milliseconds without internet dependency. Only metadata and critical insights are sent to the cloud, ensuring privacy, reducing bandwidth, and enabling real-time decision-making at the edge.

## Tech Stack
- **Core**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (Enterprise Graphite/Emerald Design System)
- **Cinematic Motion**: GSAP (ScrollTrigger) & Framer Motion
- **3D Rendering**: Three.js + React Three Fiber / Drei
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites
- Node.js 18+

### Installation & Running Locally
```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

## Architecture Highlights

### V3 Enterprise Frontend Architecture
Designed for high-fidelity product communication. Every scroll sequence acts as a cinematic product reveal using progressive disclosure. The frontend leverages cutting-edge animation techniques to communicate complex technical concepts in an intuitive, visually engaging manner.

### Edge Layer
Local model deployment using TensorRT pipeline handling raw video feeds. Processes computer vision tasks directly on edge devices (IPCs) without requiring cloud connectivity. This enables:
- Ultra-low latency processing (milliseconds)
- Privacy-preserving analytics
- Offline operation capability
- Reduced bandwidth requirements

### Neural Engine
Frames processed locally on edge devices with no massive bandwidth usage. The neural engine:
- Runs optimized TensorRT models
- Performs real-time object detection and anomaly detection
- Generates actionable insights at the source
- Only transmits metadata and alerts to the cloud

### Central Cloud
Monitor thousands of edge devices, deploy new AI models OTA (Over-The-Air) via REST/GraphQL APIs. The cloud infrastructure:
- Aggregates insights from distributed edge nodes
- Enables model versioning and deployment
- Provides centralized monitoring and analytics dashboards
- Manages device fleet orchestration
- Stores historical data for advanced analytics and reporting
