import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { USER_SUBSCRIPTION_CREDITS, USER_TOPUP_CREDITS } from '@/constants/user';

interface CreditsContextValue {
  credits: number;
  subscriptionCredits: number;
  topupCredits: number;
  deduct: (amount: number) => boolean;
  refund: (amount: number) => void;
  canAfford: (amount: number) => boolean;
  shortfall: (amount: number) => number;
}

const CreditsContext = createContext<CreditsContextValue | null>(null);

export function CreditsProvider({ children }: { children: ReactNode }) {
  const [subscriptionCredits, setSubscriptionCredits] = useState(USER_SUBSCRIPTION_CREDITS);
  const [topupCredits, setTopupCredits] = useState(USER_TOPUP_CREDITS);
  const credits = subscriptionCredits + topupCredits;

  const canAfford = useCallback((amount: number) => credits >= amount, [credits]);

  const shortfall = useCallback((amount: number) => Math.max(0, amount - credits), [credits]);

  const deduct = useCallback((amount: number) => {
    if (subscriptionCredits + topupCredits < amount) return false;
    let remaining = amount;
    // Deduct from subscription first, then top-up
    const fromSub = Math.min(remaining, subscriptionCredits);
    remaining -= fromSub;
    const fromTop = Math.min(remaining, topupCredits);
    setSubscriptionCredits(prev => prev - fromSub);
    setTopupCredits(prev => prev - fromTop);
    return true;
  }, [subscriptionCredits, topupCredits]);

  const refund = useCallback((amount: number) => {
    // Refund back to top-up
    setTopupCredits(prev => prev + amount);
  }, []);

  return (
    <CreditsContext.Provider value={{ credits, subscriptionCredits, topupCredits, deduct, refund, canAfford, shortfall }}>
      {children}
    </CreditsContext.Provider>
  );
}

export function useCredits() {
  const ctx = useContext(CreditsContext);
  if (!ctx) throw new Error('useCredits must be used within CreditsProvider');
  return ctx;
}
