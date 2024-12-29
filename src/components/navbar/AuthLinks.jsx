import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth.context';
import { useNavigate } from 'react-router-dom';

export default function AuthLinks({ handleSidebarToggle }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  if (user) return null;

  return (
    <div className="flex items-center gap-1.5">
      <Button variant="outline" onClick={() => navigate('/login')}>
        লগইন
      </Button>
      <Button onClick={() => navigate('/signup')}>আয় করুন</Button>
    </div>
  );
}
