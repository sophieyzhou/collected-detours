import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Travel from '@/pages/Travel';
import Cooking from '@/pages/Cooking';
import Fitness from '@/pages/Fitness';
import Books from '@/pages/Books';
import Music from '@/pages/Music';
import Style from '@/pages/Style';
import Writing from '@/pages/Writing';
import NotFound from '@/pages/NotFound';

/**
 * Routes are intentionally listed flat and explicit rather than generated
 * from config/sections.ts — each section will eventually need its own
 * nested routes (e.g. /travel/:postSlug for an individual trip post), so
 * keeping real route entries here now avoids a refactor later.
 */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/cooking" element={<Cooking />} />
      <Route path="/fitness" element={<Fitness />} />
      <Route path="/books" element={<Books />} />
      <Route path="/music" element={<Music />} />
      <Route path="/style" element={<Style />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
